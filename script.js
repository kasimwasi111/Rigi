document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".btn_tab");
  const tabContents = document.querySelectorAll(
    ".community, .courses, .consultation"
  );

  // Display default tab
  tabContents[0].style.display = "block";
  tabButtons[0].classList.add("active");

  // Add click event listeners to tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Hide all tab contents
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Display the selected tab content
      tabContents[index].style.display = "block";

      // Activate the clicked tab button and deactivate others
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile_menu_icon");
  const headerLinks = document.querySelector(".header_links");
  const contactLink = document.querySelector(".contact_link");
  const communityLink = document.querySelector(".community_link");

  mobileMenuIcon.addEventListener("click", function () {
    headerLinks.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
  });

  // Add smooth scrolling to the contact section when "Contact us" is clicked
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  communityLink.addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("community-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
