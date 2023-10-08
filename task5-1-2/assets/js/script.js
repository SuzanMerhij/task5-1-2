let scroolContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("BackBtn");
let nextBtn=document.getElementById("NextBtn");

nextBtn.addEventListener("click", ()=> {
  scroolContainer.style.scrollBehavior ="smooth";
  scroolContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", ()=>{
  scroolContainer.style.scrollBehavior ="smooth";
  scroolContainer.scrollLeft -=300;
  });