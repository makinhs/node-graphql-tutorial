export class User {
    private id: Number = 0;
    private firstName: String = '';
    private lastName: String = '';
    private email: String = '';
    private password: String = '';
    private permissionLevel: Number = 1;

    constructor(id: Number,
                firstName: String,
                lastName: String,
                email: String,
                password: String,
                permissionLevel: Number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.permissionLevel = permissionLevel;
    }

}
