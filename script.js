const resumeButton = document.getElementById("download-resume");
resumeButton.addEventListener("click",function(){
    const link= document.createElement("a");
    link.href="resume (2).pdf";
    link.download="resume (2).pdf";
    link.click();
})