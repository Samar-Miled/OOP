class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu; 
    }

    serve = (customerName, drink) => {
      
        if (this.menu.includes(drink)) {
        return `Welcome to ${this.name},${customerName}! Here’s your ${drink}. Enjoy!;
`
        } else 
          return:Sorry, ${customerName}, we don't serve ${drink}!;

        }


    showMenu() {
        return Ourmenuincludes ;$ {this.menu.join(',')};
    }


    addDrink(drink){
        this.menu.push(drink); 
    }
}

let chezsamar=new CoffeeShop("mycoffee",["Espresso", "Latte", "Mocha"])

console.log(chezsamar.serve("bilel","latte"))
console.log(chezsamar.serve("jihen","cappuccino"))


