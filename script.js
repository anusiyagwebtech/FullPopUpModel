const add = document.getElementById("popup");
window.addEventListener('load',()=>{
  setTimeout(() => {
      add.style.display = "block";
  }, 200);
})
const closeTag = document.getElementById('closeTag');
const popup = document.getElementById('popup');
closeTag.addEventListener("click", () => {
    popup.style.display = "none";
    
})
