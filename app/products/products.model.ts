export class Product {
    private id: Number = 0;
    private name: String = '';
    private description: String = '';
    private price: Number = 0;

    constructor(productId: Number,
                productName: String,
                productDescription: String,
                price: Number) {
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
        this.price = price;
    }

}
