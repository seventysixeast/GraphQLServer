# GraphQLServer


### Clone the repository:
```
git clone https://github.com/seventysixeast/GraphQLServer.git
````
Install MongoDB:
install Mongodb's latest version on the local system or create a MongoDB atlas URL to connect the database and create two collections "books" and "users" and data according to the schema. 

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
