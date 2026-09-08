


function RulesPage(){
    document.getElementById("MainPage").classList.add("Hidden");
    document.getElementById("RulesPage").classList.remove("Hidden");
}

function PlayGamePage(){
    document.getElementById("MainPage").classList.add("Hidden");
    document.getElementById("PlayGamePage").classList.remove("Hidden");
}

function MainPage(){
    document.getElementById("RulesPage").classList.add("Hidden");
    document.getElementById("PlayGamePage").classList.add("Hidden");
    document.getElementById("MainPage").classList.remove("Hidden");

}
