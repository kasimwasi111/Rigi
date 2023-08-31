document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".btn_tab");
  const tabContents = document.querySelectorAll(
    ".community, .courses, .consultation"
  );

  // Display default tab
  tabContents[0].style.display = "flex"; // For desktop view
  tabButtons[0].classList.add("active");

  // Function to adjust display property based on media query
  function adjustDisplayProperty() {
    const displayProperty = window.matchMedia("(max-width: 768px)").matches
      ? "block" // For mobile view
      : "flex"; // For desktop view

    tabContents.forEach((content) => {
      content.style.display = "none"; // Hide all tab contents
    });

    // Display the selected tab content
    tabContents[
      Array.from(tabButtons).indexOf(document.querySelector(".active"))
    ].style.display = displayProperty;
  }

  // Initial call to set the display property
  adjustDisplayProperty();

  // Add click event listeners to tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Deactivate all tab buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Activate the clicked tab button
      button.classList.add("active");

      // Adjust the display property of tab contents
      adjustDisplayProperty();
    });
  });

  // Adjust display property on window resize
  window.addEventListener("resize", adjustDisplayProperty);
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
