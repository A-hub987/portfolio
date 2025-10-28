let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex =0;
let maxWordIndex = words.length-1;
words[currentWordIndex].style.opacity ="1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord =currentWordIndex === maxWordIndex ? words [0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";

        },i*80);

    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340+i*80);
    
    });

    currentWordIndex =currentWordIndex === maxWordIndex ? 0 : currentWordIndex+1;

};
changeText();
setInterval(changeText,3000)

//............................ project section .........................................


//  Scroll animation: project cards fade in when visible
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".project-card");
  const triggerHeight = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerHeight) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
});


//............................ skill section .........................................

// Scroll reveal + animated progress bars
document.addEventListener("scroll", () => {
  const skillBoxes = document.querySelectorAll(".skill-box");
  const triggerHeight = window.innerHeight * 0.85;

  skillBoxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    const progress = box.querySelector("span");

    if (top < triggerHeight) {
      box.classList.add("visible");
      // Animate progress bar width
      const targetWidth = progress.getAttribute("data-width");
      progress.style.width = targetWidth;
    } else {
      box.classList.remove("visible");
      progress.style.width = "0";
    }
  });
});



/* ------------------ Contact information ------------- */



document.addEventListener("scroll", () => {
  const contactContainer = document.querySelector(".contact-container");
  const triggerHeight = window.innerHeight * 0.85;

  if (contactContainer) {
    const top = contactContainer.getBoundingClientRect().top;
    if (top < triggerHeight) {
      contactContainer.classList.add("visible");
    } else {
      contactContainer.classList.remove("visible");
    }
  }
});




// 🔹 Simple form handling (you can connect this to EmailJS or backend later)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for reaching out, Akash will get back to you soon!");
  e.target.reset();
});



