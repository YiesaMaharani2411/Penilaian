// =====================================
// TEKS BERJALAN
// =====================================

const words = [
    "RPL Student",
    "Music Lover",
    "Story Teller",
    "Future Architect"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    // MENGETIK

    if (!deleting) {

        typing.textContent =
            currentWord.slice(
                0,
                charIndex + 1
            );

        charIndex++;


        // Kalau sudah selesai mengetik

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;
        }

    }


    // MENGHAPUS

    else {

        typing.textContent =
            currentWord.slice(
                0,
                charIndex - 1
            );

        charIndex--;


        // Kalau sudah habis

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );

}


typeEffect();



// =====================================
// ANIMASI SAAT SCROLL
// =====================================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        observer.observe(element);

    }
);



// =====================================
// MENU MOBILE
// =====================================

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll("nav a")
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



// =====================================
// TOMBOL KEMBALI KE ATAS
// =====================================

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topButton.classList.add(
                "visible"
            );

        }

        else {

            topButton.classList.remove(
                "visible"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);