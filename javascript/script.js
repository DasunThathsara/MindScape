function redirectToPage() {
    var userID = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (userID == "admin" && password == "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect user name or password!");
    }
}