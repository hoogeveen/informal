'use strict';

var forOwn = require('mout/object/forOwn'),
	zen = require('elements/zen'),
	FieldBase = require('./base');

/**
 * @param {Object} spec
 */
var FieldTextarea = function(spec, value){
	if (!(this instanceof FieldTextarea)){
		return new FieldTextarea(spec, value);
	}
	FieldBase.call(this, spec, value);
};

FieldTextarea.prototype = Object.create(FieldBase.prototype);
FieldTextarea.prototype.constructor = FieldTextarea;

/**
 *
 */
FieldTextarea.prototype.build = function(){
	this.wrap = zen('li');
	zen('label').text(this.spec.label || '').insert(this.wrap);
	this.input = zen('textarea').insert(this.wrap);

	if (this.spec.name){
		this.input.attribute('name', this.spec.name);
	}
	if (this.spec.value){
		this.input.value(this.spec.value);
	}
	if (this.spec.required && this.spec.required === true){
		this.input.attribute('required', true);
	}
	if (this.spec.attributes){
		forOwn(this.spec.attributes, function(value, key){
			this.input.attribute(key, value);
		}.bind(this));
	}
};

module.exports = FieldTextarea;
