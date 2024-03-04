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

type AlienRace{
    id: ID
    name: String
    description: String
    planet: String
    language: String
    id_user: ID
}

type LighSaber{
    id: ID
    name: String
    color: String
    owner: String
}

type Token {
    token: String
}
type Query {
    users: [User]
    getAliensRace: [AlienRace]
    getLighSaber: [LighSaber]
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

input InputAlienRace {
    name: String!
    description: String!
    planet: String!
    language: String!
}

input InputLighSaber{
    name: String!
    color: String!
    owner: String!
}

type Mutation {
    createUser(user: InputUser): User
    login(user: InputUserLogin): Token
    userGetById(id: InputUserGetById): User
    createAlienRace(alien: InputAlienRace): AlienRace
    createLighSaber(LighSaber: InputLighSaber): LighSaber
}
`
