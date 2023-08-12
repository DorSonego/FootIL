const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({//a size shoe schema for the product
  sizeNumber: Number,
  quantity: {
    type: Number, default: 0,
  }
});

const userProdouctSchema = new mongoose.Schema({//product card schema for users that have the prodouct in their bag
  userId: String,
  sizeNumber: Number,

});

// TODO
const productSchema = mongoose.Schema({
  productName: String,

  produuctId: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },


  companyName: {
    type: String,
    require: [true, 'Company must have a name.'],
    trim: true,
  },

  image: {
    type: Image,
    default: 'default-img.jpg',
  },

  sizes: {
    require: [true, 'Shoe must have a size.'],
    type: [sizeSchema],
    min: 35,
    max: 50,
  },

  cards: [userProdouctSchema],

  color: String,

  price: Number,
});


//size schema methods

sizeSchema.methods.buy = async function () {//buy the product with the size 
  this.quantity = this.quantity - 1;
  next();
};

sizeSchema.methods.addSize = async function () {
  this.quantity = this.quantity + 1;
  next();
};


productSchema.methods.addToCard = async function (sizeNumber, userId) {
  cards.add(new userProdouctSchema(userId, sizeNumber));
}


module.exports = mongoose.model('Product', productSchema);
