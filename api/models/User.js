/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    email: {
      type:       "email",
      required:   true,
      unique:     true
    },
    password: {
      type: "string",
      required: true
    }
  },

  beforeCreate: function(values, cb) {
    // TODO: Bcrypt the password
    cb();
  }
};

