
document.addEventListener('DOMContentLoaded', () => {
  const myCarousel = new bootstrap.Carousel('#myCarousel', {
    interval: 2000,
    ride: 'carousel',
  });
  document.getElementById('pauseButton').addEventListener('click', () => {
    myCarousel.pause();
  });
  document.getElementById('startButton').addEventListener('click', () => {
    myCarousel.cycle();
  });
});

//   let totalCount = 0;
//   function addToCart(event) {
//     if (!event) {
//       return;
//     }
//     totalCount += 1;
//     const badge = document.querySelector('.cart');
//     if (badge) {
//       badge.textContent = totalCount;
//     }
//   }
//   const addToCartButtons = document.querySelectorAll('.add-to-cart');
//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', addToCart); 
//   });
  
//   let totalFav = 0; 
//   if (!sessionStorage.getItem('filled_hearts')) {
//     sessionStorage.setItem('filled_hearts', JSON.stringify([]));
//   }
// //   add favorites
//   function toggleFav(event) {
//     if (!event) {
//       return;
//     }
//     const heartImage = event.target;
//     const heartIndex = Array.from(document.querySelectorAll('.heart')).indexOf(heartImage); 
//     const isFilledHeart = heartImage.src.includes('red_heart.png'); 
  
//     let filledHearts = JSON.parse(sessionStorage.getItem('filled_hearts'));
  
//     if (isFilledHeart) {
//       heartImage.src = '../image/heart.png'; 
//       totalFav -= 1;
//       filledHearts = filledHearts.filter(index => index !== heartIndex);
//     } else {
//       heartImage.src = '../image/red_heart.png'; 
//       totalFav += 1;
//       filledHearts.push(heartIndex);
      
//     }
//     sessionStorage.setItem('filled_hearts', JSON.stringify(filledHearts));
//     const badge = document.querySelector('.badge');
//     if (badge) {
//       badge.textContent = totalFav;
//     }
//   }
//     const heartImages = document.querySelectorAll('.heart');
//     heartImages.forEach(heartImage => {
//         heartImage.addEventListener('click', toggleFav);
//     });
//     window.addEventListener('load', () => {
//     const filledHearts = JSON.parse(sessionStorage.getItem('filled_hearts'));
//     const heartImages = document.querySelectorAll('.heart');
  
//     // Restore the state of each heart from sessionStorage
//     filledHearts.forEach(index => {
//       const heartImage = heartImages[index];
//       if (heartImage) {
//         heartImage.src = '../image/red_heart.png';
//         totalFav += 1;
//       }
//     });
//     // Update the badge with the restored total number of filled hearts
//     const badge = document.querySelector('.badge');
//     if (badge) {
//       badge.textContent = totalFav;
//     }
//   });
  
// // Get all star elements
// const stars = document.querySelectorAll('.star');
// function updateRating(cardId, selectedRating) {
//   const cardStars = document.querySelectorAll(`.star-rating[data-card-id="${cardId}"] .star`);
//   cardStars.forEach(star => {
//     const starValue = parseInt(star.getAttribute('data-value'));
//     if (starValue <= selectedRating) {
//       star.classList.add('selected'); 
//     } else {
//       star.classList.remove('selected'); 
//     }
//   });
//   // Store the rating in sessionStorage for that specific card
//   sessionStorage.setItem(`userRating-${cardId}`, selectedRating);
// }
// stars.forEach(star => {
//   star.addEventListener('click', () => {
//     const cardId = star.closest('.star-rating').getAttribute('data-card-id'); // Get card ID
//     const selectedRating = parseInt(star.getAttribute('data-value'));
//     const currentRating = sessionStorage.getItem(`userRating-${cardId}`) ? parseInt(sessionStorage.getItem(`userRating-${cardId}`)) : 0;

//     if (selectedRating === currentRating) {
//       sessionStorage.removeItem(`userRating-${cardId}`);
//       updateRating(cardId, currentRating - 1); // Reset all stars
//     } else {
//       updateRating(cardId, selectedRating);
//     }
//   });
// });

// // Check if there's a stored rating for each card when the page loads
// window.addEventListener('load', () => {
//   const cardRatings = document.querySelectorAll('.star-rating');
//   cardRatings.forEach(cardRating => {
//     const cardId = cardRating.getAttribute('data-card-id');
//     const storedRating = sessionStorage.getItem(`userRating-${cardId}`);
//     if (storedRating) {
//       updateRating(cardId, parseInt(storedRating)); 
//     }
//   });
// });

// // banner in footer
// window.onload = function() {
//   const logoSlider = document.querySelector('.logo-slider');
//   const logos = document.querySelectorAll('.logo');
//   logos.forEach(logo => {
//     logoSlider.appendChild(logo.cloneNode(true));
//   });
// };



function increment() {
  const quantityInput = document.getElementById('quantity');
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrement() {
  const quantityInput = document.getElementById('quantity');
  if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}
function changeMainImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  // Remove active class and reset background color for all tabs
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].classList.remove("active");
  }
  // Show the selected tab content and add active styling
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.classList.add("active");
}

// Trigger the default tab
document.getElementById("defaultOpen").click();
