// List of roles to display
const roles = [
  "Data Scientist",
  "Gen AI Engineer",
  "Data Engineer",
  "Data Analyst",
  "ML Engineer"
];

let roleIndex = 0; // Start with the first role

// Function to rotate roles
function rotateRoles() {
  const roleDisplay = document.getElementById("role-display");
  if (roleDisplay) {
    // Remove existing animation class (if any) to reset
    roleDisplay.classList.remove("role-animate");

    // Update the displayed role
    setTimeout(() => {
      roleDisplay.textContent = roles[roleIndex];
      roleDisplay.classList.add("role-animate");
    }, 200); // Delay to reset animation

    // Move to the next role (looping back to the first role after the last one)
    roleIndex = (roleIndex + 1) % roles.length;
  }
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  rotateRoles(); // Display the first role immediately
  setInterval(rotateRoles, 2000); // Update roles every 2 seconds
});


document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message has been sent!");
    contactForm.reset(); // Reset the form fields
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  // Function to update active menu item
  const updateActiveLink = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70; // Adjust for header height
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Consider middle of the viewport

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  // Attach scroll event listener
  window.addEventListener("scroll", updateActiveLink);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const coverImage = document.querySelector('.about-me-cover');
    if (coverImage) {
        coverImage.style.opacity = '1'; // Ensure it's fully visible on load
        coverImage.style.transition = 'none'; // Disable transitions
    }
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});



// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const data = {
    name: form.name.value,
    email: form["form-email"].value,
    message: form.message.value,
  };

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

  try {
    // Send data to the Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.result === "Success") {
      document.getElementById("response-message").innerText = "Thank you! Your message has been sent.";
      form.reset(); // Reset the form fields
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    document.getElementById("response-message").innerText = "Error: Could not send your message.";
  }
});

