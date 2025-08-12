// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Copy Email Button
document.getElementById("copyEmailBtn").addEventListener("click", function() {
    const email = "yourname@example.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
});