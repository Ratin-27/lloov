
const messages = [
    "Are you sure? 🥺",
    "Really sure? 💔",
    "Think again! 💗",
    "Please say yes! 🥹",
    "Pretty please? 💖",
    "Give me a chance! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const message = document.querySelector(".message");
    const yesButton = document.querySelector(".yes-button");

    message.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    document.querySelector(".container").innerHTML = `
        <h1>I knew you loved me! 😍❤️</h1>
        <div class="cat">😻💖</div>
        <p>You are the best thing ever! 💕</p>
    `;
}
