document.addEventListener('DOMContentLoaded', function() {
    fetch('./scripts/images.txt')
    .then(response => response.text())
    .then(data => {
        const images = data.trim().split('\n').map(line => {
            const [src, hoverSrc] = line.split(',');
            return { src, hoverSrc };
        });

    let currentIndex = 0;
    const carouselImage = document.getElementById('carouselImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    console.log('preveBtn is: ', prevBtn);
    console.log('nex btn is ', nextBtn);

    const updateImage = () => {
        console.log("current index" , currentIndex)
        carouselImage.src = images[currentIndex].src;
        carouselImage.setAttribute('data-hover-src', images[currentIndex].hoverSrc);
        console.log("hover src is ", images[currentIndex].hoverSrc);
    };

    const addHoverEffect = (img) => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover-src');
        console.log("addhoverer efect is :",hoverSrc);

        const onMouseOver = () => img.src = hoverSrc;
        const onMouseOut = () => img.src = originalSrc;

        img.addEventListener('mouseover', onMouseOver);
        img.addEventListener('mouseout', onMouseOut);
    };
    //setting to button behaviour

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
        addHoverEffect(carouselImage);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
        addHoverEffect(carouselImage);//important for makeeffect    
    });

    addHoverEffect(carouselImage);
    updateImage();
})
.catch(error => console.error('Error loading images:', error));
});
