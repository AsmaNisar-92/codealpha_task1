const images = document.querySelectorAll('.container img'); 
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = "flex";  
    modalImg.src = images[index].src;
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; 
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; 
    }
    modalImg.src = images[currentImageIndex].src;
}


images.forEach((img, index) => {
    img.addEventListener('dblclick', function() {
        openModal(index);
    });
});


const filterButtons = document.querySelectorAll('.filter-button');
const imageContainers = document.querySelectorAll('.container > div');


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category'); 
        filterImages(category); 
    });
});


function filterImages(category) {
    imageContainers.forEach(container => {
        if (category === 'all') {
            container.style.display = 'flex'; 
        } else if (container.classList.contains(category)) {
            container.style.display = 'flex'; 
        } else {
            container.style.display = 'none'; 
        }
    });
}

document.querySelectorAll('.container img').forEach(img => {
    img.addEventListener('dblclick', () => {
        img.classList.toggle('centered');
    });
});