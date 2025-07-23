
const ScrollImage = document.getElementById('image')
// const previous = document.getElementById('prebtn')
// const next = document.getElementById('nextbtn')
const AutoSlider = document.getElementById('as')


function ScrollLeft() {
    ScrollImage.scrollTo({
        left: ScrollImage.scrollLeft - 60,
        behavior: 'smooth'
    });
}
function ScrollRight() {
    ScrollImage.scrollTo({
        left: ScrollImage.scrollLeft + 60,
        behavior: 'smooth'
    });
}

function Auto() {
    const images = ScrollImage.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        setTimeout(() => {
            ScrollImage.scrollTo({
                left: images[index].offsetLeft,
                behavior: 'smooth'
            });
            index = (index + 1) % images.length;
        }, 3000);
    }, 2000);
}


