function londonButton() {
  let tab1content = document.getElementById("tab1-content");
  let tab2content = document.getElementById("tab2-content");
  let tab3content = document.getElementById("tab3-content");

  let tab1Btn = document.getElementById("tab1-button");
  let tab2Btn = document.getElementById("tab2-button");
  let tab3Btn = document.getElementById("tab3-button");
  tab1Btn.classList.add("active");
  tab2Btn.classList.remove("active");
  tab3Btn.classList.remove("active");

  tab1content.classList.remove("display-none");
  tab2content.classList.add("display-none");
  tab3content.classList.add("display-none");
}
function parisButton() {
  let tab2content = document.getElementById("tab2-content");
  let tab1content = document.getElementById("tab1-content");
  let tab3content = document.getElementById("tab3-content");

  let tab1Btn = document.getElementById("tab1-button");
  let tab2Btn = document.getElementById("tab2-button");
  let tab3Btn = document.getElementById("tab3-button");
  tab1Btn.classList.remove("active");
  tab2Btn.classList.add("active");
  tab3Btn.classList.remove("active");

  tab2content.classList.remove("display-none");
  tab1content.classList.add("display-none");
  tab3content.classList.add("display-none");
}
function tokyoButton() {
  let tab3content = document.getElementById("tab3-content");
  let tab2content = document.getElementById("tab2-content");
  let tab1content = document.getElementById("tab1-content");

  let tab1Btn = document.getElementById("tab1-button");
  let tab2Btn = document.getElementById("tab2-button");
  let tab3Btn = document.getElementById("tab3-button");
  tab1Btn.classList.remove("active");
  tab2Btn.classList.remove("active");
  tab3Btn.classList.add("active");

  tab3content.classList.remove("display-none");
  tab1content.classList.add("display-none");
  tab2content.classList.add("display-none");
}
