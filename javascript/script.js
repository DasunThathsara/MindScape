function redirectToPage() {
    var userID = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (userID == "admin" && password == "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect user name or password!");
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
