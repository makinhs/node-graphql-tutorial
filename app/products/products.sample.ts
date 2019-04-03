import {Product} from './products.model';

const products: Array<Product> = [];

products.push(new Product(1, 'Amazing Graphql Product', 'my product one description'))
products.push(new Product(2, 'Amazing second Graphql Product', 'My second simple Node.js API tutorial'))
exports.productsSample = products;
