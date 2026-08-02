// ======================================================
// PER LA MIA PRINCIPESSINA ❤️
// ======================================================

const hero = document.getElementById("hero");
const bouquet = document.getElementById("bouquet");

const giftButton = document.getElementById("giftButton");

const transition = document.getElementById("transition");

const videoButton = document.getElementById("videoButton");

const videoSection = document.getElementById("videoSection");

const video = document.getElementById("memoryVideo");

const ending = document.getElementById("ending");

const endingText = document.querySelector(".ending-content p");

// ------------------------------------------------------
// STATO INIZIALE
// ------------------------------------------------------

bouquet.style.display = "none";
videoSection.style.display = "none";
ending.style.display = "none";

endingText.style.opacity = "0";

// ------------------------------------------------------
// REGALINO
// ------------------------------------------------------

giftButton.addEventListener("click", () => {

    if (navigator.vibrate) {

        navigator.vibrate(30);

    }

    hero.style.transition = "opacity .8s ease";

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        bouquet.style.display = "flex";

        bouquet.style.opacity = "0";

        requestAnimationFrame(() => {

            bouquet.style.transition = "opacity 1.2s ease";

            bouquet.style.opacity = "1";

        });

        window.scrollTo({

            top: bouquet.offsetTop,

            behavior: "smooth"

        });

    },800);

});

// ------------------------------------------------------
// ANIMAZIONE FOTO
// ------------------------------------------------------

const photoObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(!entry.isIntersecting) return;

        entry.target.animate([

            {

                opacity:0,

                transform:"translateY(60px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],{

            duration:900,

            easing:"ease-out",

            fill:"forwards"

        });

    });

},{
    threshold:.25
});

document.querySelectorAll(".photo").forEach((photo)=>{

    photo.style.opacity="0";

    photoObserver.observe(photo);

});

// ------------------------------------------------------
// TESTO NERO
// ------------------------------------------------------

const line1 = document.querySelector(".line1");

const line2 = document.querySelector(".line2");

line1.style.opacity="0";
line2.style.opacity="0";

videoButton.style.opacity="0";

const transitionObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(!entry.isIntersecting) return;

        line1.style.transition="1.2s";
        line2.style.transition="1.2s";
        videoButton.style.transition="1s";

        setTimeout(()=>{

            line1.style.opacity="1";

        },200);

        setTimeout(()=>{

            line2.style.opacity="1";

        },1400);

        setTimeout(()=>{

            videoButton.style.opacity="1";

        },2700);

    });

},{
    threshold:.55
});

transitionObserver.observe(transition);

// ------------------------------------------------------
// VIDEO
// ------------------------------------------------------

videoButton.addEventListener("click",()=>{

    videoSection.style.display="flex";

    window.scrollTo({

        top:videoSection.offsetTop,

        behavior:"smooth"

    });

    setTimeout(()=>{

        video.play().catch(()=>{});

    },700);

});

// ------------------------------------------------------
// FINE VIDEO
// ------------------------------------------------------

video.addEventListener("ended",()=>{

    ending.style.display="flex";

    ending.style.opacity="0";

    ending.scrollIntoView({

        behavior:"smooth"

    });

    requestAnimationFrame(()=>{

        ending.style.transition="opacity 1.5s ease";

        ending.style.opacity="1";

    });

    setTimeout(()=>{

        endingText.style.transition="opacity 2s ease";

        endingText.style.opacity="1";

    },1700);

});
