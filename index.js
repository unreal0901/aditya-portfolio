const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// quote generator

let quotes = [
  "“The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.” – Roy Mustang",

  "“Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer.” – Miss Kobayashi",

  "“Even if I die, you keep living okay? Live to see the end of this world, and to see why it was born. Live to see why a weak girl like me ended up here… And the reason you and I met.” – Sachi;",

  "“We each need to find our own inspiration. Sometimes, it is not easy.” – Kiky’s Delivery Service.",

  "“Giving up is what kills people.” – Hellsing",

  "“No matter how deep the night, it always turns to day, eventually.” – One Piece",

  "“How can you move forward when you keep regretting the past?” – Fullmetal Alchemist",

  "“Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!” – Shintaro Midorima",
  "“Fake people have an image to maintain. Real people just don’t care.” – Hachiman Hikigaya",
  "“Hard work betrays none, but dreams betray many.” – Hachiman Hikigaya",
  "“If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be!” – Uzumaki Naruto",
  "“Not giving up on yourself is what’s truly important. That way you don’t end up pathetic.” – Reiko Mikami",
  "“In this world, wherever there is light – there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars and hatred is born to protect love.” – Madara Uchiha",
];

let index = Math.floor(Math.random() * quotes.length);

let quote = `<div class="quote-generator">
<i class="fas fa-quote-left"></i>
<p>${quotes[index]}

</div>
<i class="fas fa-quote-right"></i></p>`;

let div = document.querySelector("#quote");
div.innerHTML = quote;
