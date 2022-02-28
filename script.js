let dark = document.getElementsByTagName("button")[0];
let imgs=document.images
console.log(dark.textContent);
dark.addEventListener("click", function () {
//   document.body.classList.toggle("darke");
  if (document.body.classList.toggle("darke")) {
    dark.textContent = "Dark!";
    imgs[0].src="./img/1582.gif"
    imgs[1].src="./img/1505.gif"
} else {
    dark.textContent = "Light!";
    imgs[0].src="./img/1725.gif"
    imgs[1].src="./img/2363.gif"
  }
});
