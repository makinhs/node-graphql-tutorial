const userSample = require('./users.sample').usersSample;
const crypto = require('crypto');

export class UsersService {

    public users: any = userSample;

    configTypeDefs() {
        let typeDefs = `
          type User {
            firstName: String,
            lastName: String,
            id: Int,
            password: String,
            permissionLevel: Int,
            email: String
          } `;
        typeDefs += ` 
          extend type Query {
          users: [User]
        }
        `;

        typeDefs += `
          extend type Mutation {
            user(firstName:String,
             lastName: String,
             password: String,
             permissionLevel: Int,
             email: String,
             id:Int): User!
          }`;
        return typeDefs;
    }

    configResolvers(resolvers: any) {
        resolvers.Query.users = () => {
            return this.users;
        };
        resolvers.Mutation.user = (_: any, user: any) => {
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt).update(user.password).digest("base64");
            user.password = hash;
            this.users.push(user);
            return user;
        };

    }

}
