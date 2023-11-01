var cnt = 0;
function darkmode(){
    if(cnt == 0){
        document.getElementById("butt").innerHTML = "Light Mode"
        document.getElementById("butt").style.backgroundColor = "#93B1A6"
        document.getElementById("disandin").style.color = "#93B1A6"
        document.getElementById("disandin2").style.color = "#93B1A6"
        document.getElementById("3").style.color = "#93B1A6"
        document.getElementById("font").style.color = "#93B1A6"
        document.getElementById("3").style.backgroundColor = "#385c5c"
        document.getElementById("1").style.backgroundColor = "#061f1f";
        cnt++
    }else if(cnt == 1){
        document.getElementById("butt").innerHTML = "Dark Mode"
        document.getElementById("butt").style.backgroundColor = "#385c5c"
        document.getElementById("disandin").style.color = "#183D3D"
        document.getElementById("disandin2").style.color = "#183D3D"
        document.getElementById("3").style.color = "#183D3D"
        document.getElementById("font").style.color = "#183D3D"
        document.getElementById("3").style.backgroundColor = "#93B1A6"
        document.getElementById("1").style.backgroundColor = "white";
        cnt=0
    }
}