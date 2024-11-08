// Function to open a pop-up modal with a larger image
document.addEventListener("DOMContentLoaded", function () {
    const roomCards = document.querySelectorAll(".room-card img");
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const modalImage = document.createElement("img");
    modalImage.style.width = "80%";
    modalImage.style.borderRadius = "10px";
    modal.appendChild(modalImage);

    document.body.appendChild(modal);

    roomCards.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modal.style.display = "flex";
        });
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

