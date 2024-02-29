let myNode = document.querySelector("#p2");

//parentNode 부모
let ptNode = myNode.parentNode;
//<div id='wrap'></div>
console.log(ptNode);

//[object HTMLDivElement]
console.log(`${ptNode}`);
////////////////////////////////////////////////////

//이웃 가져오기
//previousSibling
let prevNode = myNode.previousSibling;
console.log(prevNode); //#text -> 공백(줄바꿈 할때 그 공백)

prevNode = prevNode.previousSibling;
console.log(prevNode); //<p id="p1">content1</p>

//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode:${nextNode}`); //nextNode:[object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`); //nextNode:[object HTMLParagraphElement], content3

//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`); //prevEleNode:[object HTMLParagraphElement], content1

//nextElementSibling
let nextEleNode=myNode.nextElementSibling;
console.log(`nextEleNodr:${nextEleNode}, ${nextEleNode.innerText}`); //nextEleNodr:[object HTMLParagraphElement], content3

//childNodes
let divNode = document.getElementById('wrap');
console.log(`divNode: ${divNode}`); //[object HTMLDivElement]

let divChildNode = divNode.childNodes;
console.log(`divChildNode: ${divChildNode}`); //[object NodeList]
console.log(divChildNode); //NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

//children
let divChildren = divNode.children;
console.log(`divChildren: ${divChildren}`); //[object HTMLCollection]

console.log(divChildren); ////HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4]
console.log(divChildren[0]); //<p id="p1">content1</p>
console.log(divChildren.item(0)); //<p id="p1">content1</p>
console.log(divChildren.namedItem("p1")); //<p id="p1">content1</p>

///////////////////////////////
//firstChild,  firstElementChild
let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

///////////////////////////////
//객체.getAttibute("속성명"),  객체.setAttribute("속성명","값")
//객체.속성명 , 객체.속성명="값"
let aAttrNode = aNode.getAttribute('src');
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('title'));

aNode.id = 'imgGosu';
console.log(aNode.id);
