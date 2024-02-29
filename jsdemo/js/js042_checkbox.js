//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해야 합니다");
    return false;
  }
};

//전체선택
document.frm.allcheck.onclick = function () {
  // console.log(this.checked);
  // document.frm.subject1.checked=this.checked;
  // document.frm.subject2.checked=this.checked;
  // document.frm.subject3.checked=this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup);

  let myThis = this;
  checkgroup.forEach((element) => {
    // console.log(this);
    element.checked = myThis.checked;
  });

  //checkgroup은 NodeList이므로 map을 사용할 수 없다.
  //Array.from()를 이용해서 NodeList를 Array로 생성한다.
  /*let myArray = Array.from(checkgroup);
  myArray.map((element) => {
    return (element.checked = myThis.checked);
  });*/

  // let iArray = [...checkgroup];
  // iArray.map((element) => {
  //   return element.checked = iArray = myThis.checked;
  // });
};
