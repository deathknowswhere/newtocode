document.querySelector('button').addEventListener('click', function() {
    document.getElementById('hiddenMessage').style.display = 'block';
});
document.querySelector('button').addEventListener('click', function() {
document.getElementById('gotchaGif').style.display = 'block';
});
window.onload = function() {
    setTimeout(function() {
        confetti({
            particleCount: 1000,
            spread: 600,
            origin: { y: 0.1 }
        });
    }, 1000); // 1000 milliseconds for a 1-second delay
};
 document.querySelector('button').onclick = function() {
        window.open('https://www.youtube.com/watch?v=Aq5WXmQQooo');
    };
const button = document.querySelector('button');
button.onmouseover = function() {
    button.textContent = "I dare you!";
    button.style.backgroundColor = "red";
};
button.onmouseout = function() {
    button.textContent = "Do Not Click Me!";
    button.style.backgroundColor = "";
};
