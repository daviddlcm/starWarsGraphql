import "dotenv/config";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from "./graphql/schema/schema.graphql"
import {resolvers} from "./graphql/resolvers/resolver.graphql"
import "./configs/db.config"

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const PORT = parseInt(process.env.PORT || '80');

(async () =>{
    const {url} = await startStandaloneServer(server,{
        listen:{port:PORT}
    })
    console.log("server: ",url)
})();

console.log("server started")
  