function injectHideButton() {
    let allBlocks = document.getElementsByClassName("roundbox sidebox borderTopRound");

    let tarBlk = null; // target block - "Problem tags" block

    for (block of allBlocks) {
        if (block.innerText.includes("→ Problem tags")) {
            tarBlk = block;
            break;
        }
    }

    // return if "Problem tags block doesn't exist"
    if (!tarBlk) {
        console.log("CF-Tag-Hider: Problem tags block not found!");
        return;
    }

    // tags are hidden by default

    // create the hide button
    var hideBtn = document.createElement("button")
    hideBtn.innerText = "Show"
    hideBtn.id = "tags-hide-btn"
    hideBtn.className = "hide-btn"
    // ----

    // change target block position to relative
    tarBlk.style.position = "relative";
    hideBtn.style.position = "absolute";

    hideBtn.style.top = "3px";
    hideBtn.style.right = "20px";

    // tags are hidden by default
    tarBlk.children[1].style.visibility = "hidden";

    hideBtn.onclick = ()=>{
        if (hideBtn.innerHTML=="Hide") {
            tarBlk.children[1].style.visibility = "hidden";
            hideBtn.innerHTML="Show";
        }
        else {
            tarBlk.children[1].style.visibility = "visible";
            hideBtn.innerHTML="Hide";
        }
    }

    tarBlk.appendChild(hideBtn);
}

// Ensure the script runs after the page loads
window.addEventListener('load', () => {
    injectHideButton();
})