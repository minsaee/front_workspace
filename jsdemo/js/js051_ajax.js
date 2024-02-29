//AJAX = Asynchronous Javascript And XML

/*
 1. XMLHttpRequest 객체 생성한다.
 2. 서버와 통신할 때 사용할 처리 방법을 등록한다.
 3. 요청을 전송하고 통신을 시작한다.
*/

function process() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();

  xhttp.onload = () => {
    if (xhttp.status == 200) {
      let data = JSON.parse(xhttp.response);
      console.log(data);
    }
  };
}

console.log("start");
process();
console.log("end");
