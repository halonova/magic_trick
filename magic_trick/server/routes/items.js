const express = require("express")
const router = express.Router()

// const uuid = require('uuid');
// id = uuid.v1()

var items = [{
    name: "Floresta",
    price: "1.50",
    is_wishlist: false
},
{
    name: "Planície",
    price: "1.50",
    is_wishlist: false
},
{
    name: "Ilha",
    price: "1.50",
    is_wishlist: false
},
{
    name: "Pântano",
    price: "1.50",
    is_wishlist: false
},
{
    name: "Montanha",
    price: "1.50",
    is_wishlist: false
}
]

//return item
router.get('/:index', (req, res) => {
    try {
        const { index } = req.params;
        return res.json(items[index]);
    } catch {
        res.status(404).send("Not Found")
    }
})

//return by name
router.get('/:name', (req, res) => {
    try {
        //res.send("OK")
    } catch {
        res.status(404).send("Not Found")
    }
})

//return all items
router.get('/', async (req, res) => {
    try {
        res.send("OK")
        //return res.json(items)
    } catch {
        res.status(404).send("Not Found")
    }
})

//create items
router.post('/', (req, res) => {
    try {
        const { name } = req.body
        items.push(name)

        return res.status(201).json(items)
    } catch {
        res.status(404).send("Not Found")
    }
})

//update
router.put('/items/:index', (req, res) => {
    try {
        const { index } = req.params
        const { name } = req.params

        items[index] = name

        return res.json(items)
    } catch {
        res.status(404).send("Not Found")
    }
})

//delete
router.delete('/items/:index', (req, res) => {
    try {
        const { item } = req.params;

        items.splice(index, 1)
        return res.json({ message: "O item foi deletado" })
    } catch {

    }
})
module.exports = router;
