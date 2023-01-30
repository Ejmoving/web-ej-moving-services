import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4DPJiCZ4zYb6cT-5PTlNVZe967AhWASY",
  authDomain: "web-ej-moving-services.firebaseapp.com",
  projectId: "web-ej-moving-services",
  storageBucket: "web-ej-moving-services.appspot.com",
  messagingSenderId: "558622413041",
  appId: "1:558622413041:web:bc6870370344d5d60ad950",
  measurementId: "G-5K2GVXTL3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const form_review = document.getElementById("form_review");
const btn_send_review = document.getElementById("btn_send_review");

let rta_star = '';
const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formDate = new Date();
const formDescription = document.getElementById("formDescription");
const starRating = document.querySelector(".star-rating");

starRating.addEventListener("click", (e) => {
  if (e.target.value !== undefined) {
    rta_star = e.target.value;
  }
})

const modal_review = document.getElementById("modal_review");
const btn_close_review = document.getElementById("btn_close_review");
const btn_leave_review = document.getElementById("btn_leave_review");

btn_leave_review.addEventListener("click", () => {
  modal_review.classList.remove("hidden");
})

btn_close_review.addEventListener("click", () => {
  modal_review.classList.add("hidden");
})


form_review.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      name: formName.value,
      email: formEmail.value,
      date: formDate.toLocaleDateString(),
      star: rta_star,
      description: formDescription.value
    });
    form_review.reset();
    modal_review.classList.add('hidden');
    Swal.fire({
      title: 'Thanks for your comment',
      icon: 'success',
      confirmButtonText: 'Close',
      confirmButtonColor: '#2563eb'
    }) 
  } catch (e) {
    console.error("Error adding document: ", e);
  }

});

document.addEventListener('DOMContentLoaded', async () => {
  const card_review_user = document.querySelector("#card_review_user");

  const querySnapshot = await getDocs(collection(db, "reviews"));
  querySnapshot.forEach((doc) => {

    let starNumber = parseInt(doc.data().star);

    if (starNumber ==  1) {
      card_review_user.innerHTML += `
        <div id="card_review" class="swiper-slide flex justify-evenly py-8 rounded-lg border border-zinc-300 shadow-lg">
          <div class="flex flex-col w-[90%] gap-2">
            <div class="flex gap-4 items-center justify-between mb-3">
              <h2 class="text-2xl font-medium text-blue-600">${doc.data().name}</h2>
              <h3 class="text-zinc-700">${doc.data().date}</h3>
            </div>
            <div id="star_content" class="flex">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
            </div>
            <div id="container-description-reviews">
              <p id="description-reviews">${doc.data().description}</p>
            </div>
          </div>
        </div>
      `
    } else if (starNumber ==  2) {
      card_review_user.innerHTML += `
        <div id="card_review" class="swiper-slide flex justify-evenly py-8 rounded-lg border border-zinc-300 shadow-lg">
          <div class="flex flex-col w-[90%] gap-4">
            <div class="flex gap-4 items-center justify-between mb-3">
              <h2 class="text-2xl font-medium text-blue-600">${doc.data().name}</h2>
              <h3 class="text-zinc-700">${doc.data().date}</h3>
            </div>
            <div id="star_content" class="flex">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
            </div>
            <div id="container-description-reviews">
              <p id="description-reviews">${doc.data().description}</p>
            </div>
          </div>
        </div>
      `
    } else if (starNumber ==  3) {
      card_review_user.innerHTML += `
        <div id="card_review" class="swiper-slide flex justify-evenly py-8 rounded-lg border border-zinc-300 shadow-lg">
          <div class="flex flex-col w-[90%] gap-2">
            <div class="flex gap-4 items-center justify-between mb-3">
              <h2 class="text-2xl font-medium text-blue-600">${doc.data().name}</h2>
              <h3 class="text-zinc-700">${doc.data().date}</h3>
            </div>
            <div id="star_content" class="flex">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
            </div>
            <div id="container-description-reviews">
              <p id="description-reviews">${doc.data().description}</p>
            </div>
          </div>
        </div>
      `
    } else if (starNumber ==  4) {
      card_review_user.innerHTML += `
        <div id="card_review" class="swiper-slide flex justify-evenly py-8 rounded-lg border border-zinc-300 shadow-lg">
          <div class="flex flex-col w-[90%] gap-2">
            <div class="flex gap-4 items-center justify-between mb-3">
              <h2 class="text-2xl font-medium text-blue-600">${doc.data().name}</h2>
              <h3 class="text-zinc-700">${doc.data().date}</h3>
            </div>
            <div id="star_content" class="flex">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
            </div>
            <div id="container-description-reviews">
              <p id="description-reviews">${doc.data().description}</p>
            </div>
          </div>
        </div>
      `
    } else if (starNumber ==  5) {
      card_review_user.innerHTML += `
        <div id="card_review" class="swiper-slide flex justify-evenly py-8 rounded-lg border border-zinc-300 shadow-lg">
          <div class="flex flex-col w-[90%] gap-2">
            <div class="flex gap-4 items-center justify-between mb-3">
              <h2 class="text-2xl font-medium text-blue-600">${doc.data().name}</h2>
              <h3 class="text-zinc-700">${doc.data().date}</h3>
            </div>
            <div id="star_content" class="flex">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>

              <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600" astro-icon="ic:round-star"><path fill="currentColor" d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
            </div>
            <div id="container-description-reviews">
              <p id="description-reviews">${doc.data().description}</p>
            </div>
          </div>
        </div>
      `
    }

  });
});


