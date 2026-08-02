// --------------------------------------------------
// ELEMENTI
// --------------------------------------------------

const hero = document.getElementById("hero");
const bouquet = document.getElementById("bouquet");

const giftButton = document.getElementById("giftButton");

const videoButton = document.getElementById("videoButton");

const videoSection = document.getElementById("videoSection");

const ending = document.getElementById("ending");

const video = document.getElementById("memoryVideo");

// --------------------------------------------------
// STATO INIZIALE
// --------------------------------------------------

bouquet.style.display = "none";
videoSection.style.display = "none";
ending.style.display = "none";

// --------------------------------------------------
// APRI IL REGALINO
// --------------------------------------------------

giftButton.addEventListener("click", () => {

    if (navigator.vibrate) {

        navigator.vibrate(35);

    }

    hero.style.transition = "opacity .8s";

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        bouquet.style.display = "flex";

        bouquet.style.opacity = "0";

        bouquet.style.transition = "opacity 1.2s";

        setTimeout(() => {

            bouquet.style.opacity = "1";

            bouquet.scrollIntoView({

                behavior: "smooth"

            });

        }, 80);

    }, 800);

});

// --------------------------------------------------
// VIDEO
// --------------------------------------------------

videoButton.addEventListener("click", () => {

    videoSection.style.display = "flex";

    videoSection.scrollIntoView({

        behavior: "smooth"

    });

    setTimeout(() => {

        video.play();

    }, 700);

});

// --------------------------------------------------
// FINALE
// --------------------------------------------------

video.addEventListener("ended", () => {

    ending.style.display = "flex";

    ending.style.opacity = "0";

    ending.style.transition = "opacity 1.6s";

    ending.scrollIntoView({

        behavior: "smooth"

    });

    setTimeout(() => {

        ending.style.opacity = "1";

    }, 200);

});

// --------------------------------------------------
// ENTRATA DELLE FOTO
// --------------------------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.animate(

                [

                    {
                        opacity: 0,
                        transform: "translateY(60px) scale(.95)"
                    },

                    {
                        opacity: 1,
                        transform: "translateY(0) scale(1)"
                    }

                ],

                {

                    duration: 900,
                    easing: "ease-out",
                    fill: "forwards"

                }

            );

        }

    });

}, {

    threshold: 0.35

});

document.querySelectorAll(".photo").forEach((photo) => {

    photo.style.opacity = "0";

    observer.observe(photo);

});

// --------------------------------------------------
// TESTO NERO
// --------------------------------------------------

const transition = document.getElementById("transition");

const textObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const line1 = document.querySelector(".line1");
        const line2 = document.querySelector(".line2");
        const btn = document.getElementById("videoButton");

        line1.style.opacity = "0";
        line2.style.opacity = "0";
        btn.style.opacity = "0";

        line1.style.transition = "1.4s";
        line2.style.transition = "1.4s";
        btn.style.transition = "1.2s";

        setTimeout(() => {

            line1.style.opacity = "1";

        }, 300);

        setTimeout(() => {

            line2.style.opacity = "1";

        }, 1800);

        setTimeout(() => {

            btn.style.opacity = "1";

        }, 3200);

    });

}, {

    threshold: .6

});

textObserver.observe(transition);
