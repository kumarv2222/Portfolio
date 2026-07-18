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
const typingText = document.getElementById("typing-text");

const roles = [
    "Python Full Stack Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Open Source Learner"
];
const dot = [
    '.',
    '..',
    '...',
    '....'
]
let roleIndex = 0;
let dotIndex = 0;
setInterval(function(){
    typingText.textContent =roles[roleIndex]+dot[dotIndex];
    roleIndex++;
    dotIndex++;
    if (roleIndex === roles.length) {
        roleIndex = 0;
    }
    if (dotIndex === dot.length) {
        dotIndex = 0;
    }
    
},1000);

// const themebtn=document.getElementById("theme-btn");
// themebtn.addEventListener("click",function(){
//     document.body.classList.toggle("light-mode");
//     if(documenr.body.classList.contains("light-mode")){
//         themebtn.textContent="Dark Mode";
//     }else{
//         themebtn.textContent="Light Mode";
//     }
// });