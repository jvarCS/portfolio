// Scroll fade up
const observer = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.classList.add('visible');
    }
});
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Click email to clipboard
const emailLogo = document.getElementById("email");
// const copyMsg = "Copied!";
const emailText = document.getElementById("email-text");

emailLogo.addEventListener("click", () => {
    const email = emailText.firstChild.textContent.trim();
    emailLogo.classList.add("show");
    navigator.clipboard.writeText(email);
});

emailLogo.addEventListener("mouseenter", () => {
    emailLogo.classList.remove("show");
    emailLogo.classList.remove("leave");
})

emailLogo.addEventListener("mouseleave", () => {
    emailLogo.classList.add("leave");
})