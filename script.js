
const destinations = [
  { name: "Paris", desc: "City of love and lights", img: "./image/image6.jfif" },
  { name: "Dubai", desc: "Luxury and modern architecture", img: "./image/image 9.jfif" },
  { name: "Maldives", desc: "Crystal clear beaches", img: "./image/image 2.jfif" },
  { name: "London", desc: "Historic and vibrant city", img: "./image/image8.jfif" },
  { name: "Tokyo", desc: "Futuristic culture blend", img: "./image/image3.jfif" },
  { name: "New York", desc: "The city that never sleeps", img: "./image/image4.jfif" },
  { name: "Cape Town", desc: "Mountains and ocean views", img: "./image/image5.jfif" },
  { name: "Sydney", desc: "Iconic harbor city", img: "./image/image7.jfif" },
    { name: "lagos", desc: "shine your eye", img: "./image/image7.jfif" }
];

function searchDestinations() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsBox = document.getElementById("searchResults");

  resultsBox.innerHTML = "";

  if (!input.trim()) {
    resultsBox.innerHTML = "<div class='no-results'>Type a city name to search</div>";
    return;
  }

  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultsBox.innerHTML = "<div class='no-results'>No destinations found</div>";
    return;
  }

  filtered.forEach(dest => {
    const div = document.createElement("div");
    div.classList.add("result-item");

    div.innerHTML = `
      <strong>${dest.name}</strong><br>
      <small>${dest.desc}</small>
    `;

    div.onclick = () => {
      alert(`You selected ${dest.name}`);
    };

    resultsBox.appendChild(div);
  });
}
let currentSlide = 0;

function showNextSlide() {
  const slides = document.querySelectorAll(".hero-slide");

  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// auto slide every 5 seconds
setInterval(showNextSlide, 5000);

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(`Thanks ${name}, your message has been sent!`);

  document.querySelector("form").reset();
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // errors
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const successMessage = document.getElementById("successMessage");
  const submitBtn = document.getElementById("submitBtn");

  // reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // NAME validation
  if (name.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    isValid = false;
  }

  // EMAIL validation (simple but effective)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // MESSAGE validation
  if (message.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (!isValid) return;

  // simulate sending state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(() => {
    successMessage.textContent = "Message sent successfully!";

    form.reset();

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }, 1500);
});