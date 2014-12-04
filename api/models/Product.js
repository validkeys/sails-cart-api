/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title:          {
      type:     "text",
      required: true
    },
    category:       {
      type:       "string",
      enum:       ["computers", "phones", "servers"],
      required:   true
    },
    description:    'string',
    price:          {
      type:         'float',
      required:     true,
      defaultsTo:   0.00
    },
    quantityOnHand: {
      type: 'integer',
      defaultsTo: 0
    }
  },

  beforeValidate: function(values, cb) {
    sails.log(values);
    values.category = values.category.toLowerCase();
    cb();
  }
};

