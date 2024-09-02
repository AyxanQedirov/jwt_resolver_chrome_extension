let jwt;
document.addEventListener("selectionchange", (event) => {
    var selectedText = window.getSelection().toString();

    if (selectedText == "") {
        hideResolver();
        return;
    }

    jwt = atob(selectedText);
    showResolver();
});


function hideResolver() {
    var resolver = document.getElementsByClassName("jr-float-btn")[0];
    resolver.classList.add("jr-hidden");
}

function showResolver() {
    var resolver = document.getElementsByClassName("jr-float-btn")[0];
    resolver.classList.remove("jr-hidden");
}