
function sleep(ms) {
    return new Promise ((resolve) => setTimeout(resolve,ms));
}

const phrase = ["News Updates Here,","Enterpreneurial advice,","The Best Services At Copra."];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while(true) {
        let curWord = phrase[curPhraseIndex];

        for(let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
        for(let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if(curPhraseIndex === phrase.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};


/* Parallax Scroll Effect */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// First Link Display
document.getElementById("col1").addEventListener("click", ()=> {
    // Styling for Update button
    document.getElementById("col1").classList.add("action");
    document.getElementById("col2").classList.remove("action");
    document.getElementById("col3").classList.remove("action");
    var shows = document.getElementById("shows");
    var shows1 = document.getElementById("shows1");
    var shows2 = document.getElementById("shows2");
    // Update visibity
    shows2.style.display = "none";
    shows.style.display = "inline";
    shows1.style.display = "none";
});

// Second Link Display
document.getElementById("col2").addEventListener("click", ()=> {
    // Styling for Stories button
    document.getElementById("col2").classList.add("action");
    document.getElementById("col1").classList.remove("action");
    document.getElementById("col3").classList.remove("action");
    var shows1 = document.getElementById("shows1");
    var shows = document.getElementById("shows");
    var shows2 = document.getElementById("shows2");
    // Stories visibility
    shows.style.display = "none";
    shows1.style.display = "inline";
    shows2.style.display = "none";
});

// Third Link Display
document.getElementById("col3").addEventListener("click", ()=> {
    // Styling for Blog Posts button
    document.getElementById("col3").classList.add("action");
    document.getElementById("col1").classList.remove("action");
    document.getElementById("col2").classList.remove("action");
    var shows1 = document.getElementById("shows1");
    var shows2 = document.getElementById("shows2");
    var shows = document.getElementById("shows");
    // Blog Posts visibility
    shows.style.display = "none";
    shows1.style.display = "none";
    shows2.style.display = "inline";
});





writeLoop();

// document.getElementById("myBtn").addEventListener("click", ()=> {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
// });
