
let all_blocks = document.getElementsByClassName("roundbox sidebox borderTopRound"); 

let tar_blk = all_blocks[4]; // target block - "Problem tags" block

// tags are hidden by default

// create button
var btn_new = document.createElement("button")
btn_new.innerText = "Show"
btn_new.id = "tags-hide-btn"
btn_new.className = "hide-btn"
// ----

// change target block position to relative
tar_blk.style.position = "relative";
btn_new.style.position = "absolute";

btn_new.style.top = "3px";
btn_new.style.right = "20px";

// tags are hidden by default
tar_blk.children[1].style.visibility = "hidden";

btn_new.onclick = ()=>{
    if (btn_new.innerHTML=="Hide") {
        tar_blk.children[1].style.visibility = "hidden";
        btn_new.innerHTML="Show";
    }
    else {
        tar_blk.children[1].style.visibility = "visible";
        btn_new.innerHTML="Hide";
    }
}

tar_blk.appendChild(btn_new);
