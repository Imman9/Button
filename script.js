var index = 0;

function changeColors() {
    var colors = ["red", "blue", "yellow", "green", "orange", "purple"];
    document.body.style.backgroundColor = colors[index++];

    if (index >= colors.length) {
        index = 0;
    }
}

