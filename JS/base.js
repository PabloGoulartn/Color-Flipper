function GenerateRandomColor() {
    return Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function ChangeColorNumber(colorNumber)
{
    document.querySelector('span').innerHTML = "#" + colorNumber;
    document.querySelector('.color').style.color = "#" + colorNumber;
}

function ChangeBackgroundColor()
{
    let randomColor = GenerateRandomColor();
    document.body.style.backgroundColor = "#" + randomColor;

    ChangeColorNumber(randomColor);
}
