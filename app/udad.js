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

window.onscroll = function () {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  var backToTop = document.querySelector(".back-to-top");

  if (scrollPos > 600) {
    // Adjust this value to control when the link appears
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Scroll to top when the "Back to Top" link is clicked
document.querySelector(".back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
