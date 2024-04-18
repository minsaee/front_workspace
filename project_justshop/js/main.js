var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.remove("slide-active");
  }

  slideIndex++;

  // Reset slideIndex to 0 if it exceeds the number of slides
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Apply styles to the next slide
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].classList.add("slide-active");

  setTimeout(showSlides, 3000); // Change every 3 seconds
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   // Hide all slides and reset z-index
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//     slides[i].style.zIndex = -1;
//   }

//   // Increment slide index or reset
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   // Bring the next slide up with a higher z-index
//   slides[slideIndex - 1].style.opacity = 1;
//   slides[slideIndex - 1].style.zIndex = 1;

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.transform = "translateY(-100%)";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].style.transform = "translateY(0)";
//   setTimeout(showSlides, 3000); // Change slide every 3 seconds
// }

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("slide-active");
//     slides[i].classList.remove("next-up");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].classList.add("slide-active");
//   var nextIndex = slideIndex % slides.length;
//   slides[nextIndex].classList.add("next-up");

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   // Remove 'slide-active' and 'next-up' classes from all slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("slide-active", "next-up");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   // Add 'slide-active' to the current slide
//   slides[slideIndex - 1].classList.add("slide-active");

//   // Prepare the next slide
//   var nextSlideIndex = slideIndex % slides.length;
//   slides[nextSlideIndex].classList.add("next-up");

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("slide-active");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].classList.add("slide-active");

//   if (slideIndex == slides.length) {
//     slides[0].classList.add("next-up");
//   } else {
//     slides[0].classList.remove("next-up");
//   }
//   setTimeout(showSlides, 3000);
// }

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//     slides[i].classList.remove("slide-active");
//   }

//   slideIndex++;

//   // Reset slideIndex to 0 if it exceeds the number of slides
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   // Apply styles to the next slide
//   slides[slideIndex].style.opacity = 1;
//   slides[slideIndex].classList.add("slide-active");

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// 슬라이드 구현하기
// 현재 표시되는 슬라이드를 추적하는 변수 생성.
// var slideIndex = 0;
// // 스크립트 실행될 때 즉시 함수 호출
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//     // slides[i].classList.remove("slide-active");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 0;
//   }

//   slides[slideIndex - 1].style.opacity = 1;
//   slides[slideIndex - 1].classList.add("slide-active");

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// var goingUp = true; // A new variable to toggle the animation direction

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   var i;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//     goingUp = !goingUp; // Toggle the direction after each cycle
//   }

//   slides[slideIndex - 1].style.display = "block";
//   slides[slideIndex - 1].style.animationName = goingUp
//     ? "slideUpAnimation"
//     : "slideDownAnimation";

//   setTimeout(showSlides, 3000); // Change every 3 seconds
// }

// 함수 구현
// function showSlides() {
//   // for문에서 사용할 변수 선언
//   var i;
//   // mySlides라는 클래스명의 요소를 모두 가져와 slides 변수에 저장하기
//   // 이 요소들은 슬라이드 쇼의 슬라이드들을 나타낸다.
//   var slides = document.getElementsByClassName("mySlides");

//   // for문 구현
//   for (i = 0; i < slides.length; i++) {
//     // 각 슬라이드를 display에서 숨긴다.
//     slides[i].style.display = "none";
//   }
//   // 다음 슬라이드로 이동하기 위해 변수를 증가시키기
//   slideIndex++;
//   // 슬라이드 수를 초과하면 1로 리셋을 시켜서 슬라이드쇼가 루프의 형태를 가지게하기
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   // 현재 슬라이드를 display에 표시하기
//   slides[slideIndex - 1].style.display = "block";

//   // 3초마다 이미지 체인지
//   setTimeout(showSlides, 3000);
// }

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].className = slides[i].className.replace(" active-slide", "");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].className += " active-slide";
//   setTimeout(showSlides, 3000);
// }

// onclick = chgTab 함수 정의
// 이 함수는 인덱스를 인자로 받는다.
function chgTab(activeIndex) {
  // tabContents에 .tc > li 태그를 가진 모든 요소 저장하기.
  var tabContents = document.querySelectorAll(".tc > li");

  // tabHeaders에 .tm > li 태그를 가진 모든 요소 저장하기.
  var tabHeaders = document.querySelectorAll(".tm > li");

  // Deactivate all tabs and hide all contents
  // 모든 탭 헤더에서 "on" 클래스를 제거하고 비활성화
  tabHeaders.forEach((header) => header.classList.remove("on"));
  // 모든 탭 콘텐츠의 display를 숨긴다.
  tabContents.forEach((content) => (content.style.display = "none"));

  // Activate the clicked tab and show its content
  // 사용자가 클릭한 탭 헤더에 'on' 클래스를 추가하여 활성화
  tabHeaders[activeIndex].classList.add("on");
  // 활성화 된 탭에 해당하는 콘텐츠의 diplay를 보여준다.
  tabContents[activeIndex].style.display = "block";
}

// onclick = popup 함수 정의
function popup(action) {
  // 문서에서 클래스 이름이 .pop인 첫번째 요소를 찾아 변수에 저장
  var popupElement = document.querySelector(".pop");

  // .pop 클래스를 가진 요소가 문서에 존재한다면 if문 실행
  if (popupElement) {
    // action값에 따라 팝업 요소가 display에서 보이거나 숨기기
    // action이 block이면 보이고 none이면 숨기기
    popupElement.style.display = action;
  }
}
