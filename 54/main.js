// A way to make a flexiable list function
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    //setting up a section in the list with a changeable name 
    dynamicObject[key] = value;
    return dynamicObject;
}
//another list
var userPreference = createObjectWithDynamicKey("theme", "dark");
// showing choice
console.log(userPreference);
