console.log("Sanity Check");
//console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method")
console.log(idElement);
//console.log(document.getElementsByTagName("div"));
var tagElements = document.getElementsByTagName("div");
console.log(tagElements)
var classElements = document.getElementsByClassName("use-class-method")

//changing html elements

console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed";

console.log(classElements[1]);
classElements[1]; = "I changed by class"