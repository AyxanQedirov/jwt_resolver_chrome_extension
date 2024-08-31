
document.addEventListener("selectionchange",(event)=>{
 var selectedText = window.getSelection().toString();
 console.log(selectedText);
});