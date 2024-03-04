import "dotenv/config";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from "./graphql/schema/schema.graphql"
import {resolvers} from "./graphql/resolvers/resolver.graphql"
import "./configs/db.config"
import { getToken } from "./middlewares/auth.middleware";
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const PORT = parseInt(process.env.PORT || '80');

(async () =>{
    const {url} = await startStandaloneServer(server,{
        context: async ({req}) => {
            try{
            const token = req.headers.authorization || '';
            
            const user = await getToken(token);
            return user
            }catch(e: any){
                console.log(e.message)
                return {}
            }
        },
        listen:{port:PORT}
    })
    console.log("server: ",url)
})();

console.log("server started")
  