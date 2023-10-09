/**
 * Mongoose schema for rating model
 * @typedef {Object} RatingSchema
 * @property {string} userId - The ID of the user being rated
 * @property {number} rating - The rating given to the user
 */
const mongoose= require('mongoose');

const ratingSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    },
});

module.exports =ratingSchema;

