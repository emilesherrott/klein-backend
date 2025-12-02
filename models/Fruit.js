const fruits = require("../fruits.json")

class Fruit{
    constructor (genus, name, id, family, order, nutritions) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit))
    }

    static showOne = (name) => {
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name)
        if (fruit.length == 1){
            return new Fruit(fruit)
        } else {
            throw Error("The fruit does not exist")
        }
    }

    static create = (data) => {
        const newFruit = data
        newFruit["id"] = fruits.length + 1
        fruits.push(newFruit)
        return new Fruit(newFruit)

    }
}

module.exports = Fruit