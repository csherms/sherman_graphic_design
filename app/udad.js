document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".image-link");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  let isImageEnlarged = false; // Variable to track the image state

  // Function to toggle the modal
  function toggleModal() {
    if (isImageEnlarged) {
      modalImage.classList.remove("enlarged"); // Remove the class for enlarged image
      isImageEnlarged = false;
    } else {
      modalImage.classList.add("enlarged"); // Add the class for enlarged image
      isImageEnlarged = true;
    }

    if (imageModal.style.display === "block") {
      imageModal.style.display = "none";
    } else {
      imageModal.style.display = "block";
    }
  }

  imageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const image = link.querySelector("img");
      modalImage.src = image.src;
      toggleModal();
    });
  });

  closeModal.addEventListener("click", function () {
    toggleModal();
  });
});
