const resumeButton = document.getElementById("download-resume");
resumeButton.addEventListener("click",function(){
    const link= document.createElement("a");
    link.href="resume (2).pdf";
    link.download="resume (2).pdf";
    link.click();
})
//not push to github 
const navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId= this.getAttribute("href")
        const targetElement= document.querySelector(targetId);
        targetElement.scrollIntoView({behavior:"smooth"});
    })
})

const navs=document.querySelector(".resume-btn");
navs.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({behavior:"smooth"}
)

})