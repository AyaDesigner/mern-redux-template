const express = require('express');
const router = express.Router();
const Item = require('../database/models/item-model');


/* GET items listing. */

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});


//add new item
router.route('/').post((req, res) => {

  const itemToAdd = req.body;
  const newItem = new Item(itemToAdd);
  newItem.save()
    .then(() => res.json(newItem))
    .catch(err => res.status(400).json('error is here' + err));
});


//updating item
router.route('/:id').put((req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json(req.body))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deleting an item
router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
