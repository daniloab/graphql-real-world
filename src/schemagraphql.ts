input CreateUserInput {
    name: String
}

type CreateUserPayload {
    user: User
}

type Mutation {
    """Create a new user"""
    CreateUser(input: CreateUserInput): CreateUserPayload
}

type Query {
    version: String
    me: User
    users: [User]
    user(id: ID!): User
    talks: [Talk]
    talk(id: ID!): Talk
}

type Like {
    count: Int!
}

type LikeNewPayload {
    like: Like
}

type Subscription {
    LikeNew: LikeNewPayload
}

type Talk {
    name: String!
    description: String!
    speaker: User!
    host: User!
}

type User {
    name: String!
}

