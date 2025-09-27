function loadAbout() {
  const content = document.getElementById("content");

  const aboutUsTitle = document.createElement("h1");
  aboutUsTitle.textContent = "Give Us Your Feedback";
  content.appendChild(aboutUsTitle);

  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.id = "about-us-container";
  content.appendChild(aboutUsContainer);

  const descTitle = document.createElement("h2");
  descTitle.textContent = "Our Story";
  aboutUsContainer.appendChild(descTitle);

  const aboutUsDesc = document.createElement("p");
  aboutUsDesc.classList.add("about-us-desc");
  aboutUsDesc.textContent =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";
  aboutUsContainer.appendChild(aboutUsDesc);

  const contactUsTitle = document.createElement("h2");
  contactUsTitle.textContent = "Contact Us";
  aboutUsContainer.appendChild(contactUsTitle);

  const contactUsDetails = document.createElement("ul");
  aboutUsContainer.appendChild(contactUsDetails);

  const address = document.createElement("li");
  address.textContent =
    "Address: Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523";
  contactUsDetails.appendChild(address);

  const tel = document.createElement("li");
  tel.textContent = "Tel: (786) 713-8616";
  contactUsDetails.appendChild(tel);

  const email = document.createElement("li");
  email.textContent = "Email: sample@example.com";
  contactUsDetails.appendChild(email);
}

export default loadAbout;
