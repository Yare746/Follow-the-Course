const canvas= document.getElementById("gameCanvas")
const ctx= canvas.getContext("2d");














function RulesPage(){
    document.getElementById("MainPage").classList.add("Hidden");
    document.getElementById("RulesPage").classList.remove("Hidden");
}

function PlayGamePage(){
    document.getElementById("MainPage").classList.add("Hidden");
    document.getElementById("PlayGamePage").classList.remove("Hidden");
    document.getElementById("CourseOneButton").addEventListener("click", Course1);
    document.getElementById("CourseTwoButton").addEventListener("click", Course2);
    document.getElementById("CourseThreeButton").addEventListener("click", Course3);
}

function MainPage(){
    document.getElementById("RulesPage").classList.add("Hidden");
    document.getElementById("PlayGamePage").classList.add("Hidden");
    document.getElementById("MainPage").classList.remove("Hidden");

}

function Course1(){
    document.getElementById("Course1Page").classList.remove("Hidden");
    document.getElementById("PlayGamePage").classList.add("Hidden");
    document.getElementById("RulesPage").classList.add("Hidden");
    document.getElementById("Course2Page").classList.add("Hidden");
    document.getElementById("Course3Page").classList.add("Hidden");

    
}



draw (context){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0,Math.PI*2);
    context.fillStyle= "purple";
    context.fill();
    context.closePath();
}

