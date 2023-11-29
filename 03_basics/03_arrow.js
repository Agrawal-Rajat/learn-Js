const user = {
    username : "Rajat",
    price : 999,
    welcomeMessage : function(){
        console.log(`my name is ${this.username}`)  
    }
}

user.welcomeMessage() // my name is Rajat
user.username = "Garvit"
user.welcomeMessage() // my name is Garvit