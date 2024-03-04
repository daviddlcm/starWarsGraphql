export const typeDefs = `
type User {
    id: ID
    name: String
    email: String
    password: String
    created_at: String
    updated_at: String
    deleted: Boolean
    deleted_at: String
}
type Token {
    token: String
}
type Query {
    users: [User]
}

input InputUser {
    name: String!
    email: String!
    password: String!
}

input InputUserLogin{
    email: String!
    password: String!
}

input InputUserGetById{
    id: ID!
}

type Mutation {
    createUser(user: InputUser): User
    login(user: InputUserLogin): Token
    userGetById(id: InputUserGetById): User
}
`
