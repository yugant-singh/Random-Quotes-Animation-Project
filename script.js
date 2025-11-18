let btn = document.querySelector("button");
let main = document.querySelector(".main");

const quotes = [
  // Motivation
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Work hard in silence, let success make the noise.",
  "If you can dream it, you can do it.",
  "Every day is a new beginning, take a deep breath and start again.",
  "Small steps every day lead to big results.",
  "Believe you can, and you’re halfway there.",
  "Your only limit is your mind.",
  "The best view comes after the hardest climb.",
  "Great things never come from comfort zones.",

  // Funny
  "I’m not lazy, I’m on energy-saving mode.",
  "My bed and I are perfect for each other… but my alarm clock hates it.",
  "I don’t need a hairstylist, my pillow gives me a new hairstyle every morning.",
  "If stress burned calories, I’d be a supermodel by now.",
  "I’m not short, I’m concentrated awesome.",
  "I run on coffee, chaos, and weird ideas.",
  "I didn’t fall, the floor just needed a hug.",
  "I’m on a seafood diet. I see food, I eat it.",
  "My brain has too many tabs open.",
  "I’m not arguing, I’m just explaining why I’m right."
];

btn.addEventListener("click", function(){


    let index = Math.floor(Math.random()*quotes.length);
    console.log(index);
    let x = Math.floor(Math.random()*80);
    let y = Math.floor(Math.random()*80);
    let rot = Math.floor(Math.random()*20) - 10;
  let cl = Math.floor(Math.random()*256);
   let cl2 = Math.floor(Math.random()*256);
    let cl3 = Math.floor(Math.random()*256);
  let scl = (Math.random() * 1.7 + 0.8).toFixed(2);
   console.log(cl,cl2,cl3);
   
    let h1  = document.createElement("h1");
    h1.textContent = quotes[index];
    h1.style.position = "absolute";
    h1.style.top = `${y}%`;
    h1.style.left = `${x}%`;
    h1.style.rotate = `${rot}deg`
    h1.style.color = `rgb( ${cl},${cl2},${cl3})`;
    h1.style.scale = `${scl}`;
    h1.classList.add("quote");
    main.appendChild(h1);
     
    
   
})