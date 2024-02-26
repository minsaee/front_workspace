// https://poiemaweb.com/js-dom
// https://hyojin96.tistory.com/entry/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-Render-Tree%EC%99%80-DOM-Tree%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90

let hNode = document.getElementById("selector");
console.log(`${hNode}`);
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length);

console.log(pNode[0]);
console.log(pNode.item(0));

// content1
console.log(pNode[0].innerText);
console.log(pNode[0].textContent);
pNode[0].style.backgroundColor = "blue";

function process() {
  // alert("click");
  let fname = document.frm.fname;
  console.log(fname, typeof fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
