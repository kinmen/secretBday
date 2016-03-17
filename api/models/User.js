/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	firstName : {
  		type: 'string',
      required: true
  	},

  	gameName : {
  		type: 'string',
      unique: true
  	},

  	birthMonth : {
  		type: 'integer',
      required: true
  	},
  	birthDay : {
  		type: 'integer',
      required: true
  	}
  }
};

