class Param {
    constructor (element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, add, topping) {
        this.size = new Param(this._select(size));
        this.add = new Param(this._select(add));
        this.toppings = this.getToppings(topping);
    }
    
    getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(element => {
            let obj = new Param(element);
            result.push(obj)
        });
        return result;
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    calculatePrice() {
        let result = this.size.price + this.add.price;
        this.toppings.forEach(element => result +=element.price);
        return result;
    }
    calculateCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(element => result +=element.calories);
        return result;
    }

    renderSum(price, calories) {
        document.querySelector(price).textContent = this.calculatePrice();
        document.querySelector(calories).textContent = this.calculateCalories();
    }
  }