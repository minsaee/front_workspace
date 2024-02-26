let myNode = document.querySelector("#p2");

// parentNode
let pNode = myNode.parentNode;
console.log(pNode);
console.log(`${pNode}`);

// previousSibling
let preNode = myNode.previousSibling;
console.log(preNode); // #text 줄바꿈한 공백

preNode = preNode.previousSibling;
console.log(preNode); // <p id="p1">content1</p>
