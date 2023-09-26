require("dotenv").config();
const  http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const httpServer = http.createServer(app);
const db = require('./src/database/dbConnection');

const router = require("./src/routers/router");

// database
global.databaseModelsCommon = {};
global.databaseModels = {};
global.databaseConnectionForOrg = {};

const listener = async () =>{  

app.use(bodyParser.urlencoded({
    limit: "500mb",
    parameterLimit: 1000000,
    extended: true
}))

app.use(bodyParser.json({
    limit: '500mb'
}));

app.use("/static", express.static("./static/"));
app.use(express.static(path.join(__dirname, "public")));

// Main Database Connection...
db.mainConnection();

app.use("/", router);

// ======================== GraphQL ========================

const {ApolloServer} = require("@apollo/server");
const { startStandaloneServer } = require('@apollo/server/standalone')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const users = require("./src/database/models/UserModel").user
const {gql} = require("graphql-tag");
const typeDefs = gql`
    input addBook {
        title: String!,
        author: String!
    }
    type Book {
        title: String
        author: String
    }
    type Author {
        name: String
        age: String
    }
    type Query {
        books: [Book]
        authors: [Author]
    }
    type Mutation {
        addbook(input: addBook): Book!
    }

`;

const resolvers = {
    Query: {
        books: async (parent, args, context, info) => {
            // return authors
            const {
                book: Books
            } = databaseModels;
            console.log(databaseModels)
            const u = await Books.find();
            console.log(u)
            return u;
        },
        authors: async (parent, args, context, info) => {
            // return authors
            const {
                user: User
            } = databaseModels;
            const u = await User.find();
            return u;
        }
    },

    Mutation: {
        addbook: async (_, { input }) => {
            const {
                book: Books
            } = databaseModels;
            const {title, author} = input;
            let add = new Books({ title: title, author:author})
            let addedData = await add.save();
            return addedData
            
        }
    }

};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
})


const {url} = await startStandaloneServer(server, {
    listen: {
        port: process.env.PORT || process.env.SERVERPORT
    }
})

console.log(`🚀 Server listening at: ${url}`);

// ======================== GraphQL ========================


// httpServer.listen(process.env.PORT || process.env.SERVERPORT, () => {
//     console.log("Server is Listening on port no.", process.env.PORT || process.env.SERVERPORT)
// })
}

listener()