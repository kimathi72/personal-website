const links = document.querySelectorAll("a.nav-link");
const pages = []; 
for (const link of links  ){
      pages.push(document.getElementById(link.target));
    
     }
console.log(pages)
let pageToLoad = () => {

}
function loadPage (pageToLoad){
  for (const page of pages){
    console.log(page);
    if(page.id === pageToLoad){
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  }
}
function index () {
  loadPage("home");
  for (const link of links){
    console.log(link);
    link.addEventListener("click", (e) => {
      console.log (link.target)
      e.preventDefault();
      let pageToLoad = link.target;
      console.log(pageToLoad);
      loadPage(pageToLoad);

    })
    
  }
}


document.addEventListener("DOMContentLoaded", index);





