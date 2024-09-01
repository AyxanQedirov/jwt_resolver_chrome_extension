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
    var resolver = document.getElementsByClassName("resolver")[0];
    resolver.classList.add("hidden");
}

function showResolver() {
    var resolver = document.getElementsByClassName("resolver")[0];
    resolver.classList.remove("hidden");
}