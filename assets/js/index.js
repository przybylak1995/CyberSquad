const firstSet = [
    "assets/image1.jpg",
    "assets/image2.png",
    "assets/image3.jpeg"
];

const secondSet = [
    "assets/parentia.png",
    "assets/genk.png",
    "assets/marcan.jpeg"
];

let currentSet = 0;
let sets = [firstSet, secondSet];

function updateImages() {
    const currentImages = sets[currentSet];

    currentImages.forEach((imageSrc, index) => {
        const imgElement = document.getElementById(`carousel_image${index + 1}`);
        
        // Voeg fade-out effect toe
        imgElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Verander de afbeelding
            imgElement.src = imageSrc;
            
            // Voeg fade-in effect toe
            imgElement.classList.remove('fade-out');
            imgElement.classList.add('fade-in');
        }, 700); // Zorgt ervoor dat de afbeelding verandert na de fade-out
    });

    currentSet = (currentSet + 1) % sets.length;
}

setInterval(updateImages, 5000);
