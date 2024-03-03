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

type Query {
    users: [User]
}

input InputUser {
    name: String!
    email: String!
    password: String!
}

type Mutation {
    createUser(user: InputUser): User
}
`
