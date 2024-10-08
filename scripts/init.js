
let body = document.getElementsByTagName("body")[0];

// floatBtn creating side
let floatBtn = document.createElement("div");
floatBtn.classList.add("jr-float-btn");
floatBtn.classList.add("jr-hidden");
floatBtn.innerHTML = "<span class=\"jr-float-icon\">👀</span>";
body.appendChild(floatBtn);

// viewPanel creating side
let viewPanel = document.createElement("div");
viewPanel.classList.add("jr-view-panel");
viewPanel.classList.add("jr-hidden");
viewPanel.innerHTML=`
<div class="jr-view-panel-head">
    <button class="btn">Close</button>
</div>

<div class="jr-view-panel-body">
    
</div>
`;

body.appendChild(viewPanel);


// Adding event listeners to elements
floatBtn.addEventListener("click",()=>{
    floatBtn.classList.add("jr-hidden");
    viewPanel.classList.remove("jr-hidden");
});
