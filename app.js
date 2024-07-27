const collapsible = document.querySelectorAll(".collapse-box");

collapsible.forEach((item, index) => {
    let head = item.querySelector(".collapse-head");
    head.addEventListener("click", () => {
        item.classList.toggle("open");

        let body = item.querySelector(".collapse-body");
        let img = item.querySelector(".collapse-img");
        if (item.classList.contains("open")){
            body.style.height = `${body.scrollHeight}px`;
            img.src = 'assets/images/icon-minus.svg';
        }
        else{
            body.style.height = "0px";
            img.src = 'assets/images/icon-plus.svg';
        }
    })
})