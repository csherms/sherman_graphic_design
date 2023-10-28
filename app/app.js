// Get references to the "Pricing" link, the About section, and the About header
const pricingLink = document.getElementById("aboutLink"); // Assuming "aboutLink" is your Pricing link
const aboutSection = document.querySelector(".about"); // Select the element with class "about"
const aboutHeader = document.querySelector(".about_header"); // Select the element with class "about_header"

// Hide the "About" section initially
aboutSection.style.display = "none";

// Function to toggle the display of the "About" section
function toggleAboutSection() {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "inline-block";
  } else {
    aboutSection.style.display = "none";
  }
}

// Add click event listeners to both the "Pricing" link and the "About" header
pricingLink.addEventListener("click", (e) => {
  e.preventDefault();
  toggleAboutSection();
});

aboutHeader.addEventListener("click", toggleAboutSection);
