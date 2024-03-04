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

type Movie {
    id: ID
    name: String
    description: String
    director: String
    release_date: String
    language: String
}

type Planet {
    id: ID
    name: String
    description: String
    galaxy: String
}



type Token {
    token: String
}
type Query {
    users: [User]
    getAliensRace: [AlienRace]
    getLighSaber: [LighSaber]
    getMovies: [Movie]
    userGetById(id: InputUserGetById): User
    getMoviesForName(name: MovieInputSearch): Movie
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
input MovieInput{
    name: String!
    description: String!
    director: String!
    release_date: String!
    language: String!
}
input MovieInputSearch{
    name: String!
}

input PlanetInput{
    name: String!
    description: String!
    galaxy: String!
}
input PlanetInputDelete{
    id: ID!
}

type Mutation {
    createUser(user: InputUser): User
    login(user: InputUserLogin): Token
    createAlienRace(alien: InputAlienRace): AlienRace
    createLighSaber(LighSaber: InputLighSaber): LighSaber
    createMovie(movie: MovieInput): Movie
    createPlanet(planet: PlanetInput): Planet
    deletePlanet(id: PlanetInputDelete): Planet
}
`
