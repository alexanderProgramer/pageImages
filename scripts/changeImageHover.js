document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'img/wide.jpg', hoverSrc: './img/wide2.png' },
        { src: 'img/reisuit.jpg', hoverSrc: './img/reissued.png' },
       

    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carouselImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

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
});