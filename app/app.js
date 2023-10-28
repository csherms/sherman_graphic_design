// Get references to the "Pricing" link, the About section, and the About header section
const pricingLink = document.getElementById("aboutLink"); // Assuming "aboutLink" is your Pricing link
const aboutSection = document.querySelector(".about"); // Select the element with class "about"
const aboutHeader = document.querySelector(".about_header"); // Select the entire "about_header" section

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
