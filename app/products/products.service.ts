export class ProductsService {

    public products: any = [
        {
            name: 'oi',
            id: 1
        },
        {
            name: 'olar',
            id: 2
        }
    ];

    configTypeDefs() {
        let typeDefs = `
          type Product {
            name: String,
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
