
# Mongoose Relations

There are multiple ways to emulate `relations` like you would in an `RDBMS` or `SQL` database with mongoose. The easiest being using the `Schema` builder to store `ObjectIds` about the relation.

In a `SQL` database we have all sorts of powerful tools handle this natively, however it's not quite as simple for `NoSQL`.

The easiest way to achieve this functionality with mongoose is store `ObjectIds` for each related document (as stated above) and use `virtuals` and the `populate` method to get the related documents.

**Example Schemas:**
```js
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  // Set this to have mongoose return back 
  // all products when the converted to JSON
  // eg. res.send(store)
  toJSON: {
    virtuals: true,
  }
});
storeSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'store',
  justOne: false,
});

const Store = mongoose.model('Store', storeSchema);

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  store: {
    type: ObjectId,
    ref: 'Store',
    required: true,
  },
});
const Product = mongoose.model('Product', productSchema);

module.exports = {
  Store,
  Product,
};
```

**Example Usage:**

```js
// Usage with express...
app.get('/', async (req, res) => {
  // This will replace the ObjectIds with all of our documents!
  const stores = await Store.find({}).populate('products');

  res.send(stores);
});
```
