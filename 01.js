const imageContainerE1 = document.querySelector(".container-image");
const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", () => {
    addNewImages(10);
});

function addNewImages(imageNum) {
    for (let i = 0; i < imageNum; i++) {
        const newImgE1 = document.createElement("img");
        newImgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerE1.appendChild(newImgE1);
    }
}
