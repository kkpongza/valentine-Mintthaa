document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('imageContainerr');
    imageContainer.style.display = 'none';

    // JavaScript
    const escapeButton = document.getElementById('escapeButton2');
    const yesButton = document.getElementById('yesButton');

    // Function to move the button randomly
    function moveButton() {
        const screenWidth = window.innerWidth - escapeButton.clientWidth;
        const screenHeight = window.innerHeight - escapeButton.clientHeight;

        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * screenHeight);

        escapeButton.style.left = `${randomX}px`;
        escapeButton.style.top = `${randomY}px`;
    }

    // Add event listener for hover
    escapeButton.addEventListener('mouseenter', moveButton);

    let clickCount = 0;
    function expandButton() {
        const yesButton = document.getElementById('yesButton');
        const mainElement = document.querySelector('.main');

        clickCount++;
        switch (clickCount) {
            case 1:
                yesButton.style.transform = 'scale(1.2)';
                mainElement.style.fontSize = '60px';
                mainElement.innerHTML = 'Really?';
                break;
            case 2:
                yesButton.style.transform = 'scale(1.7)';
                mainElement.style.fontSize = '70px';
                mainElement.innerHTML = 'REALLYYYYYY?';
                break;
            case 3:
                yesButton.style.transform = 'scale(2)';
                mainElement.style.fontSize = '75px';
                mainElement.innerHTML = 'REALLYYYYYY??';
                break;
            case 4:
                yesButton.style.transform = 'scale(2.5)';
                mainElement.style.fontSize = '80px';
                mainElement.innerHTML = 'Are you suree?';
                break;
            default:
                // yesButton.style.transform = 'scale(1)';
                // mainElement.style.fontSize = '20px';
                // mainElement.innerHTML = 'Yes!';
                // break;
                yesButton.style.display = 'none';
                escapeButton.style.display = 'none';
                mainElement.style.fontSize = '90px';
                mainElement.innerHTML = "I Love YOUUUUUUUUUU Mintttt";
                imageContainer.style.display = 'flex';
                mainElement.style.padding = '20px';
                break;
        }
    }

    yesButton.addEventListener('click', expandButton);

});