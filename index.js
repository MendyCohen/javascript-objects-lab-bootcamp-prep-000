var recipes = {};

 function updateObjectWithKeyAndValue(object, key, value) {
   var newobj = {};
   return object.assign({}, object[key] = value);
   
 }
  
