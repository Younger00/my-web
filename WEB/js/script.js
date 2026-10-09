
const menuBtn = 
document.getElementById("menuBtn");
const navLinks = 
document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");
menuBtn.setAttribute("aria-expanded", isOpen);
if (isOpen) {
menuBtn.textContent = "✕ Close Menu";
} else {
menuBtn.textContent = "☰ Menu";
}
});
// Close menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
menuBtn.setAttribute(
"aria-expanded",
"false"
);
menuBtn.textContent = "☰ Menu";
});
});

// 2. LIGHT / DARK THEME

const themeBtn =
document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
const darkMode =
document.body.classList.contains("dark-mode");
if (darkMode) {
themeBtn.textContent ="Light Mode";
} else {
themeBtn.textContent =" Dark Mode";
}
});
 
// 3. EXPANDABLE PROJECT DETAILS// 
const detailButtons =
document.querySelectorAll(".details-btn");
detailButtons.forEach(function (button) {
button.addEventListener("click", function () {
const details =
button.nextElementSibling;
const isHidden =
details.hasAttribute("hidden");
if (isHidden) {
details.removeAttribute("hidden");
button.textContent =
"Hide Details";
button.setAttribute(
"aria-expanded",
"true"
);
} else {
details.setAttribute(
"hidden",
""
);
button.textContent =
"Show Details";
button.setAttribute(
"aria-expanded",
"false"
);
}
});
});

// 4. PROJECT SEARCH / FILTER// 
const searchInput =
document.getElementById("projectSearch");
const resetSearch =
document.getElementById("resetSearch");
const searchMessage =
document.getElementById("searchMessage");
const projectCards =
document.querySelectorAll(".project-card");
function filterProjects() {
const searchText =
searchInput.value
.trim()
.toLowerCase();
let numberFound = 0;
projectCards.forEach(function (card) {
const searchData =
card.dataset.search;
if (searchData.includes(searchText)) {
card.style.display = "";
numberFound++;
} else {
card.style.display = "none";
}
});
if (numberFound === 0) {
searchMessage.textContent =
"No projects or skills match your search.";
} else {
searchMessage.textContent =
numberFound +
" project(s) found.";
}
}
// Run search when user types
searchInput.addEventListener(
"input",
filterProjects
);
// Reset search
resetSearch.addEventListener(
"click",
function () {
searchInput.value = "";
filterProjects();
}
)

// 5. PHOTO GALLERY
const photos = [
{
src: "images/jsk.jpg",
alt: "My first portfolio photo of two girls",
caption: "PEAOPLE to keep"
},
{
src: "images/jsl.jpg",
alt: "My second portfolio photo",
caption: "all trying to be the best"
},
{
src: "images/jsm.jpg",
alt: "My third portfolio photo",
caption: "All trying to be cute how did it go"
},
{
    src: "images/jsp.jpg",
    alt: "My fourth portfolio photo",
    caption: "Tou don't see this often"
},
{
    src: "images/jsn.jpg",
    alt: "My fifth portfolio photo",
    caption: "Friends to family hmmm things change"
},
{
    src: "images/jsq.jpg",
    alt: "My sixth portfolio photo",
    caption: "Your very own play Boy Younger"
}
];
let currentPhoto = 0;
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function showPhoto(index) {
galleryImage.src = photos[index].src;
galleryImage.alt = photos[index].alt;
galleryCaption.textContent = photos[index].caption;
}
prevBtn.addEventListener("click", function () {
currentPhoto =(currentPhoto - 1 + photos.length) % photos.length;
showPhoto(currentPhoto);
});
nextBtn.addEventListener("click", function () {
currentPhoto =(currentPhoto + 1) % photos.length;
showPhoto(currentPhoto);
});
showPhoto(currentPhoto);
// Next button
document.getElementById("nextBtn")
.addEventListener("click", function () {
currentPhoto =(currentPhoto + 1)
% photos.length;
showPhoto(currentPhoto);
}
);
// 
// 6. CONTACT FORM VALIDATION

const form =
document.getElementById("contactForm");
const formPreview =
document.getElementById("formPreview");
form.addEventListener(
"submit",
function (event) {
// Stop the browser from sending the form
event.preventDefault();
// Get the input values
const name =
document.getElementById("name");
const email =
document.getElementById("email");
const message =
document.getElementById("message");
// Get error areas
const nameError =
document.getElementById("nameError");
const emailError =
document.getElementById("emailError");
const messageError =
document.getElementById("messageError");
// Clear previous errors
nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";
formPreview.textContent = "";
let valid = true;
// -------------------------
// Validate name
// -------------------------
if (name.value.trim() === "") {
nameError.textContent =
"Please enter your name.";
valid = false;
}
// -------------------------
// Validate email
// -------------------------
const emailPattern =
/^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (
!emailPattern.test(
email.value.trim()
)
) {
emailError.textContent =
"Please enter a valid email address.";
valid = false;
}
// -------------------------
// Validate message
// -------------------------
if (message.value.trim() === "") {
messageError.textContent =
"Please enter a message.";
valid = false;
}
// -------------------------
// Display valid preview
// -------------------------
if (valid) {
const summary =
document.createElement("div");
const heading =
document.createElement("h3");
heading.textContent =
"Form Preview";
const nameText =
document.createElement("p");
nameText.textContent =
"Name: " +
name.value.trim();
const emailText =
document.createElement("p");
emailText.textContent =
"Email: " +
email.value.trim();
const messageText =
document.createElement("p");
messageText.textContent =
"Message: " +
message.value.trim();
const status =
document.createElement("p");
status.textContent =
"The data was validated successfully. " +
"No message was sent.";
summary.append(
heading,
nameText,
emailText,
messageText,
status
);
formPreview.appendChild(
summary
);
}
}
);