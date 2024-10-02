console.log("Started");

let all_blocks = document.getElementsByClassName("roundbox sidebox borderTopRound"); 

let tar_blk = all_blocks[4]; // target block

var btn_new = document.createElement("button")

btn_new.innerText = "Click Me"

btn_new.id = "tags-hide-btn"

btn_new.className = "hide-btn"

tar_blk.appendChild(btn_new);
