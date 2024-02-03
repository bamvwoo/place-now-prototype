let isMainDragging = false;

window.onload = () => {
    const wrapperElem = document.querySelector("#wrapper");
    const tglDarkModeBtnCtnElem = document.querySelector("#tglDarkModeBtnCtn");
    const tglDarkModeBtnElem = document.querySelector("#tglDarkModeBtn");

    var isDarkModeOn = document.querySelector("#wrapper").classList.contains("mode-dark");
    if (isDarkModeOn) {
        tglDarkModeBtnElem.classList.add("fa-sun");
    } else {
        tglDarkModeBtnElem.classList.add("fa-moon");
    }

    tglDarkModeBtnCtnElem.addEventListener("click", (event) => {
        if (!tglDarkModeBtnElem.classList.contains("clicked")) {
            tglDarkModeBtnElem.classList.add("clicked");

            setTimeout(() => {
                tglDarkModeBtnElem.classList.remove("clicked");
            }, 1000);
        }

        if (wrapperElem.classList.contains("mode-dark")) {
            wrapperElem.classList.remove("mode-dark");
            wrapperElem.classList.add("mode-light");

            setTimeout(() => {
                tglDarkModeBtnElem.classList.remove("fa-sun");
                tglDarkModeBtnElem.classList.add("fa-moon");
            }, 500);
        } else {
            wrapperElem.classList.remove("mode-light");
            wrapperElem.classList.add("mode-dark");
            
            setTimeout(() => {
                tglDarkModeBtnElem.classList.remove("fa-moon");
                tglDarkModeBtnElem.classList.add("fa-sun");
            }, 500);
        }
    });

    document.querySelectorAll(".container-toggle-btn").forEach((elem) => {
        elem.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle("enabled");
        });
    });

    document.querySelector("#openAiChatBtn").addEventListener("click", (event) => {
        const openChatBtnElem = document.querySelector("#openAiChatBtn");
        if (!openChatBtnElem.classList.contains("clicked")) {
            openChatBtnElem.classList.add("clicked");
            setTimeout(() => {
                openChatBtnElem.classList.remove("clicked");
            }, 500);
        }

        const chatAreaElem = document.querySelector("#aiChatArea");
        const modalBackgroundElem = document.querySelector("#modalBackground");
        if (chatAreaElem.classList.contains("opened")) {
            chatAreaElem.classList.remove("opened");
            chatAreaElem.classList.add("closed");

            setTimeout(() => {
                modalBackgroundElem.style.display = "none";
            }, 500);
            modalBackgroundElem.classList.remove("opened");
            modalBackgroundElem.classList.add("closed");
        } else {
            chatAreaElem.classList.add("opened");
            chatAreaElem.classList.remove("closed");
            
            modalBackgroundElem.style.display = "block";
            modalBackgroundElem.classList.add("opened");
            modalBackgroundElem.classList.remove("closed");
        }
    });

    document.addEventListener("scroll", (event) => {
        const headerElem = document.querySelector("header");
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 150 && headerElem.classList.contains("header-lg")) {
            headerElem.classList.remove("header-lg");
            headerElem.classList.add("header-sm");
        } else if (scrollTop <= 150 && headerElem.classList.contains("header-sm")) {
            headerElem.classList.add("header-lg");
            headerElem.classList.remove("header-sm");
        }
    });

}