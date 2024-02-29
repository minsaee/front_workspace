//호출한 객체가 없을 경우에는 기본적으로 Window객체이다
console.log(this);
let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};

member.show(); //{name: '홍길동', show: ƒ}
///////////////////////////////////////

let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};
member2.show(); //Window
///////////////////////////////////////

//버전땜에 이렇게도 가능
let member3 = {
  name: "홍길동",
  show() {
    console.log(this);
  },
};
member3.show(); //{name: '홍길동', show: ƒ}
///////////////////////////////////////

function showThisName() {
  console.log(this);
}
showThisName(); //Window
///////////////////////////////////////

let showThisName2 = () => {
  console.log(this);
};
showThisName2(); //Window
///////////////////////////////////////
//이벤트에서 this

let btn = document.querySelector("#btn");
btn.addEventListener(
  "click",
  function () {
    console.log(this, this == btn); //<button id="btn">commit</button> true //버튼클릭하면 나온다
  },
  false
);
///////////////////////////////////////
let btn2 = document.querySelector("#btn");
btn.addEventListener(
  "click",
  () => {
    console.log(this, this == btn2); //Window, false
  },
  false
);
///////////////////////////////////////
const hong = { name: "홍길동" };
const jung = { name: "정해인" };

///////////////////////////////////////
//call(): call()메서드는 모든 함수에서 사용할 수 있으며 this값을 특정값으로 지정할 수 있다.
console.log("call()================================");
//익명함수 일때,
showThisName.call(hong); //{name: '홍길동'} //this가 const를 가리킴
showThisName.call(jung); //{name: '정해인'}

//화살표함수 일때,
showThisName2.call(hong); //Window
showThisName2.call(jung); //Window

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this); //Window
}

update(2019, "IT"); //Window

update.call(hong, 2000, "프로그래머"); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.call(jung, 2016, "디자이너"); //{name: '정해인', birthYear: 2016, job: '디자이너'}

///////////////////////////////////////
//apply()
//1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply는 매개변수를 배열로 받는다.
console.log("apply()================================");
//배열로 넣어줘야함 [] -> 이렇게
update.apply(hong, [2000, "programmer"]); //{name: '홍길동', birthYear: 2000, job: 'programmer'}
update.apply(jung, [2016, "designer"]); //{name: '정해인', birthYear: 2016, job: 'designer'}

///////////////////////////////////////
//bind()
//1. call과 사용방법은 같으나 실행을 해야한다.
console.log("bind()================================");
// let hongUpdate = update.bind(hong, 2000, '프로그래머');
// hongUpdate(); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.bind(hong, 2000, "프로그래머")();

// let jungUpdate = update.bind(jung, 2016, "디자이너");
// jungUpdate(); //{name: '정해인', birthYear: 2016, job: '디자이너'}
update.bind(jung, 2016, "디자이너")();
