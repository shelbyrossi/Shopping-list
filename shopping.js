const items = [
    {
        id: 1,
        name: "milk",
        price: 3

    }, {

        id: 2,
        name: "eggs",
        price: 1

    }, {

        id: 3,
        name: "mustard",
        price: 4
    }
]

for (const item of items) {
    console.log(`I need to buy ${item.name} from the store, it should cost ${item.price} dollars.`)
}


