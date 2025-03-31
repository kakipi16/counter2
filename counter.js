(() => {
    const $counter = document.querySelector("#js-counter");
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else if($targetButton.textContent === "-") {
            $counter.textContent = currentCount - 1;
        } else if($targetButton.textContent === "+10") {
            $counter.textContent = currentCount + 10;
        } else if($targetButton.textContent === "-10") {
            $counter.textContent = currentCount - 10;
        } else if($targetButton.textContent === "multiply") {
            $counter.textContent = Math.pow(currentCount, 2);
        }
        if($counter.textContent >= 10000) {
            document.querySelector(".js-image").classList.add('isActive');
        } else if($counter.textContent <= -50) {
            document.querySelector(".js-image2").classList.add('isActive2');
        } else {
            document.querySelector(".js-image").classList.remove('isActive');
            document.querySelector(".js-image2").classList.remove('isActive2');
        }
    }

    for(let index = 0; index < document.querySelectorAll(".js-button").length; index++) {
        document.querySelectorAll(".js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();