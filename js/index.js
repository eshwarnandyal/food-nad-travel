var email="eshwar789@gmail.com"
var pass="156"
function autho()
{
    var usergivenUSID=document.getElementById("email").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID&&pass==usergivenPass)
    {
        document.getElementById("fom").setAttribute("action","./home.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=usergivenUSID&&pass==usergivenPass)
    {
        document.getElementById("inputdiv").style.borderColor="red"
        document.getElementById("passworddiv").style.borderColor="royalblue"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,purple)"
        document.getElementById("result").innerHTML="wrong emailid"
    }
    else if(email==usergivenUSID&&pass!=usergivenPass)
    {
        document.getElementById("passworddiv").style.borderColor="red"
        document.getElementById("inputdiv").style.borderColor="royalblue"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,purple,red)"
        document.getElementById("result").innerHTML="wrong passward"
    }
    else
    {
        document.getElementById("passworddiv").style.borderColor="red"
        document.getElementById("inputdiv").style.borderColor="red"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="wrong passward and email"
    }
}
function visiblePassward()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","../asset/photos/eye-solid.svg")
    document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassward()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","../asset/photos/eye-solid.svg")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
}