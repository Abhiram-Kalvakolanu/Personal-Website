// List of roles to display
const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "Python Developer",
  "Data Analyst",
  "AI Engineeer"
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



const PIPEDREAM_WEBHOOK_URL = "https://eox5elmk0khi3vm.m.pipedream.net";

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  // Collect form data
  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    // Send data to the webhook or process it (if required)
    await fetch(PIPEDREAM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Show a simple alert with the updated message
    alert("Thank you! The message has been sent successfully.");
    form.reset(); // Clear the form fields
  } catch (error) {
    alert("Error: Could not send your message. Please try again later.");
  }
});


// Enable and handle the send button
const inputField = document.querySelector('.chatbot-input');
const sendButton = document.getElementById('send-button');

// Toggle button state based on input
inputField.addEventListener('input', () => {
  sendButton.disabled = !inputField.value.trim(); // Enable if input is not empty
});

// Handle send button click
sendButton.addEventListener('click', () => {
  const message = inputField.value.trim();
  if (message) {
    console.log('Message sent:', message); // Replace with your message handling logic
    inputField.value = ''; // Clear the input field
    sendButton.disabled = true; // Disable the button again
  }
});
