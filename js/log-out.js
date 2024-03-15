
const logOut = document.querySelector(".log-out")

logOut.addEventListener("click", () => {
    alert("Log Out ?")
    // window.localStorage.clear(),
    window.location.replace("../index.html")
})