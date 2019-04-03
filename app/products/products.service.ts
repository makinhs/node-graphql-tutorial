const productSample = require('./products.sample').productsSample;

export class ProductsService {

    public products: any = productSample;

    configTypeDefs() {
        let typeDefs = `
          type Product {
            name: String,
            description: String,
            id: Int
          } `;
        typeDefs += ` 
          extend type Query {
          products: [Product]
        }
        `;

        typeDefs += `
          extend type Mutation {
            product(name:String, id:Int): Product!
          }`;
        return typeDefs;
    }

    configResolvers(resolvers: any) {
        resolvers.Query.products = () => {
            return this.products;
        };
        resolvers.Mutation.product = (_: any, product: any) => {
            this.products.push(product);
            return product;
        };

    }

}
