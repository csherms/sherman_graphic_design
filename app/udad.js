document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".image-link");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");
  const prevImage = document.getElementById("prevImage");
  const nextImage = document.getElementById("nextImage");
  let currentIndex = 0;

  // Create an array to store image sources
  const imagesArray = [];
  imageLinks.forEach((link) => {
    imagesArray.push(link.querySelector("img").src);
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const image = link.querySelector("img");
      currentIndex = imagesArray.indexOf(image.src);
      modalImage.src = image.src;
      imageModal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", function () {
    imageModal.style.display = "none";
  });

  // Function to display the previous image in the modal
  prevImage.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    modalImage.src = imagesArray[currentIndex];
  });

  // Function to display the next image in the modal
  nextImage.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    modalImage.src = imagesArray[currentIndex];
  });

  window.onscroll = function () {
    var scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
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
});
