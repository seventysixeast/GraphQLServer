# GraphQLServer
GraphQL is an open-source query language that describes how a client should request information through an API. In a broad sense, GraphQL is a syntax developers can use to ask for specific data and return that data from multiple sources. Once the client defines the structure of the data needed, the server returns data using the identical structure.


### Clone the repository:
```
git clone https://github.com/seventysixeast/GraphQLServer.git
````
### Install MongoDB:
install Mongodb's latest version on the local system or create a MongoDB atlas URL to connect the database and create two collections "books" and "users" and add data according to the schema. 

### Collection Schema.
User Schema.
{
    name: String,
    age: Number,
}

books Schema.
{
   title: String,
   author: String
}

### Configuring your app

Add the `.env` file to the root folder with their respective values.

SERVERPORT=8080

DATABASE_CONNECTION="databaseURL"

### Install Packages 
Run ```npm install``` inside root folder

### Run your app!
```
npm start
````
server will start running on http://localhost:8080/
