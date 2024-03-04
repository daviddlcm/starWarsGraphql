import jwt  from "jsonwebtoken";
import { GraphQLError } from 'graphql';
export const getToken = async (token: string) => {
    try {
        const {result}: any = jwt.verify(token, "secret");
        return result;
    } catch (error) {
        throw new GraphQLError('error en token', {
            extensions: {
              code: 'not found',
            },
          });
    }
}