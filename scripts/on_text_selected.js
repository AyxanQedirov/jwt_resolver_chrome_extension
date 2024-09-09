let jwt;
document.addEventListener("selectionchange", (event) => {
    var selectedText = window.getSelection().toString();

    if (selectedText == "") {
        hideResolver();
        return;
    }

    showResolver();
    //jwt = atob(selectedText);
});


function hideResolver() {
    setTimeout(() => {
        var resolver = document.getElementsByClassName("jr-float-btn")[0];
        resolver.classList.add("jr-hidden");
    }, 1000);
}

function showResolver() {
    setTimeout(() => {
        var resolver = document.getElementsByClassName("jr-float-btn")[0];
        resolver.classList.remove("jr-hidden");
    }, 1000);
}

