function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property to properties array
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove property from properties array
  var index = this.properties.indexOf(property);
  this.properties.splice(index, 1);  
};



