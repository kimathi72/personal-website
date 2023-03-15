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
function messages (){
  let form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    let name = document.querySelector("input#messengerName").value;
    console.log(name);
    let message = document.querySelector("textarea#messengerNote").value;
    console.log(message);
    alert(`Dear ${name}, your Message has been received`);
    return true;

  })
}
messages();
document.addEventListener("DOMContentLoaded", index);





