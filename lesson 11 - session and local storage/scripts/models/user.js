export default class User {
    //תכונות
    name;
    email;
    dob;
    pass;

    //בנאי
    constructor(name, email, dob, pass){
        this.name = name; 
        this.email = email; 
        this.dob = dob;
        this.pass = pass;
    }
}