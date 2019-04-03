export class Product {
    private id: Number = 0;
    private name: String = '';
    private description: String = '';

    constructor(private productId: Number, productName: String, productDescription: String) {
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
    }
}
