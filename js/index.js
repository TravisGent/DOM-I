const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
navBar[0].style.color = "green";
navBar[1].style.color = "green";
navBar[2].style.color = "green";
navBar[3].style.color = "green";
navBar[4].style.color = "green";
navBar[5].style.color = "green";

let currentNav = document.querySelector("nav");

let newNavItem = document.createElement("a");
newNavItem.textContent = "newThing!";
let newNavItemTwo = document.createElement("a");
newNavItemTwo.textContent = "newThingTwo!";
currentNav.appendChild(newNavItem);
currentNav.appendChild(newNavItemTwo);


let hOneText = document.querySelector("h1");
hOneText.textContent = siteContent["cta"]["h1"];

let buttonText = document.querySelector("button");
buttonText.textContent = siteContent["cta"]["button"];

let allHFour = document.querySelectorAll("h4");
allHFour[0].textContent = siteContent["main-content"]["features-h4"];
allHFour[1].textContent = siteContent["main-content"]["about-h4"];
allHFour[2].textContent = siteContent["main-content"]["services-h4"];
allHFour[3].textContent = siteContent["main-content"]["product-h4"];
allHFour[4].textContent = siteContent["main-content"]["vision-h4"];

allHFour[5].textContent = siteContent["contact"]["contact-h4"];

let allPara = document.querySelectorAll("p");
allPara[0].textContent = siteContent["main-content"]["features-content"];
allPara[1].textContent = siteContent["main-content"]["about-content"];
allPara[2].textContent = siteContent["main-content"]["services-content"];
allPara[3].textContent = siteContent["main-content"]["product-content"];
allPara[4].textContent = siteContent["main-content"]["vision-content"];

allPara[5].textContent = siteContent["contact"]["address"];
allPara[6].textContent = siteContent["contact"]["phone"];
allPara[7].textContent = siteContent["contact"]["email"];

allPara[8].textContent = siteContent["footer"]["copyright"];


let imgCodeSnippet = document.getElementById("cta-img");
imgCodeSnippet.setAttribute("src", siteContent["cta"]["img-src"]);

let centerImage = document.getElementById("middle-img");
centerImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);