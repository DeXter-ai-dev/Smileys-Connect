let userName;

function greeting(){
    userName = document.getElementById("fname").value;
    document.getElementById("welUser").innerHTML = "Hi," + userName + ". Welcome to Smileys";
}