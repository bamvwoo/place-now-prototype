let isMainDragging = false;

window.onload = () => {
    document.querySelectorAll(".container-toggle-btn").forEach((elem) => {
        elem.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle("enabled");

            if (event.currentTarget.classList.contains("enabled")) {
                document.querySelectorAll(".mode-dark").forEach((obj) => {
                    obj.classList.remove("mode-dark");
                    obj.classList.add("mode-light");
                });
            } else {
                document.querySelectorAll(".mode-light").forEach((obj) => {
                    obj.classList.remove("mode-light");
                    obj.classList.add("mode-dark");
                });
            }
        
        });
    });

    document.querySelector("#openAiChatBtn").addEventListener("click", (event) => {
        const chatAreaElem = document.querySelector("#aiChatArea");
        if (chatAreaElem.classList.contains("opened")) {
            chatAreaElem.classList.remove("opened");
            chatAreaElem.classList.add("closed");
        } else {
            chatAreaElem.classList.add("opened");
            chatAreaElem.classList.remove("closed");
        }
    });

    // 
    document.querySelector("main").addEventListener("mousedown", (event) => {
        event.preventDefault();
        
        isMainDragging = true;
    });

    document.querySelector("main").addEventListener("mousemove", (event) => {
        if (isMainDragging) {
        }
    });

    document.querySelector("main").addEventListener("mouseup", (event) => {
        isMainDragging = false;
    });
}