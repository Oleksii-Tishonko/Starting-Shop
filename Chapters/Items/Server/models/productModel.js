const mongoose  = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
{
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 40,
        minlength: 5,
    },
    rating: {
        type: Number, 
        default: 4.0,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
    },
    price:{
        type: Number, 
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    specs:{
        type: Map,
        of: String,
    },
    photoId: String,
    
}

// {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
// }
);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;