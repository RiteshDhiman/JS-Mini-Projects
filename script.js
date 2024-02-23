const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my computer I needed a break and now it won't stop sending me vacation ads.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm reading a book about anti-gravity. It's really uplifting!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm on a whiskey diet. I've lost three days already.",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
    "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them.",
    "I'm friends with 25 letters of the alphabet. I don't know y.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "What's orange and sounds like a parrot? A carrot!",
    "I'm writing a book about reverse psychology. Please don't buy it.",
]


const fun = ()=>{
    let rand = Math.floor(Math.random()*(jokes.length));
    let randomJoke = jokes[rand];
    document.querySelectorAll(".content-area")[0].textContent = `"${randomJoke}"`;
    document.getElementsByClassName("pressMe")[0].style.backgroundColor = "rgba(245, 245, 245, 0.744)";
}

document.getElementsByClassName("pressMe")[0].addEventListener('click',fun);
