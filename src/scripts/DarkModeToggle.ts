const body = window.document.body;

function determineTheme() {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

function toggleDarkMode() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

determineTheme();

export default toggleDarkMode;