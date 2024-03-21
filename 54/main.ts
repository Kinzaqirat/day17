// A way to make a flexiable list function
function createObjectWithDynamicKey(key:string, value :string){
let dynamicObject ={};
//setting up a section in the list with a changeable name 
dynamicObject[key] = value;
return dynamicObject;
}
//another list
let userPreference = createObjectWithDynamicKey("theme", "dark");
// showing choice
console.log(userPreference);
