function show_men() {
  let ele = document.getElementById("a1");
  let place = document.getElementById("nav_hover_content");
  let details = document.getElementById("nav_men_content");
  ele.style.borderBottom = "3px solid rgb(236, 33, 57)";
  ele.style.paddingBottom = "31px";
  place.style.visibility = "visible";
  details.style.visibility = "visible";
  console.log("show");
  // padding-bottom:31px ;
  // border-bottom: 3px solid rgb(0, 0, 0);
}
function hide_men() {
  let ele = document.getElementById("a1");
  let place = document.getElementById("nav_hover_content");
  let details = document.getElementById("nav_men_content");
  ele.style.borderBottom = "none";
  ele.style.paddingBottom = "34px";
  place.style.visibility = "hidden";
  details.style.visibility = "hidden";
}

function show_men() {
  let ele = document.getElementById("a1");
  let place = document.getElementById("nav_hover_content");
  let details = document.getElementById("nav_women_content");
  ele.style.borderBottom = "3px solid rgb(236, 33, 57)";
  ele.style.paddingBottom = "31px";
  place.style.visibility = "visible";
  details.style.visibility = "visible";
  console.log("show");
  // padding-bottom:31px ;
  // border-bottom: 3px solid rgb(0, 0, 0);
}
function hide_men() {
  let ele = document.getElementById("a1");
  let place = document.getElementById("nav_hover_content");
  let details = document.getElementById("nav_women_content");
  ele.style.borderBottom = "none";
  ele.style.paddingBottom = "34px";
  place.style.visibility = "hidden";
  details.style.visibility = "hidden";
}
