// Get references to the "Pricing" link, the About section, and the About header section
const pricingLink = document.getElementById("aboutLink");
const aboutSection = document.querySelector(".about");
const aboutHeader = document.querySelector(".about_header");

// Function to toggle the "About" section with a smooth dropdown effect
function toggleAboutSection() {
  aboutSection.classList.toggle("active");
}

// Add click event listeners to both the "Pricing" link and the entire "About" header section
pricingLink.addEventListener("click", (e) => {
  e.preventDefault();
  toggleAboutSection();
});

aboutHeader.addEventListener("click", toggleAboutSection);

window.onscroll = function () {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  var backToTop = document.querySelector(".back-to-top");

  if (scrollPos > 800) {
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
