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

// for (const item of items) {
//     console.log(`I need to buy ${item.name} from the store, it should cost ${item.price} dollars.`)
// }


// function addToShoppingList(id,dateCreated,price) {
//     return [id,dateCreated,price]
// }
// console.log(items);
// console.log(addToShoppingList(5, "spaghetti" , 10));
// console.log(addToShoppingList(4, "ketchup" , 8));
// console.log(addToShoppingList(5, "sauce" , 4));
// console.log(addToShoppingList(5, "creamer" , 5));
// console.log(addToShoppingList(5,  "donuts" , 8));
// console.log(addToShoppingList(5,  "cookies" , 10));

const add= {
    name: "icecream",
    price: 10
}

const addShoppingItem = (itemObject) => {

    const lastIndex = items.length - 1
    const currentLastItem = items[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    
    itemObject.id = idForNewItem
    items.push(itemObject)


}

addShoppingItem(add)
    // for (const item of items) {
    //     console.log(`I need to buy ${item.name} from the store, it should cost ${item.price} dollars.`)
    // }

    for(const item of items) {
        if(item.price > 8) {
            console.log(item)
        }

    }