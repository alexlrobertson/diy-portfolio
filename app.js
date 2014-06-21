function clickButton(message) {
    alert(message);
}

var button = document.querySelector('.click-me');

button.addEventListener('click', function () {
    clickButton('I was clicked using an event handler!');
});
