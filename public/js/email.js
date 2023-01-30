const btn = document.getElementById("button");
const form = document.getElementById("form");
const fromName = document.getElementById("from_name");
const fromEmail = document.getElementById("email");
const text_form_send = document.getElementById("text_form_send");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (fromName.value !== '' && fromEmail.value !== '') {
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_knd2ydh";
  
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Sent";
        form.reset();
        text_form_send.classList.remove('hidden');
        form.classList.add('hidden');
      },
      (err) => {
        btn.innerHTML = "Not Sent";
        form.reset();
      }
    );
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Please fill all fields',
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#2563eb'
    }) 
  } 

});

const modal_quote = document.getElementById("modal_quote");
const btn_form_Quote = document.getElementById("btn_form_Quote");
const btn_modal_quote = document.getElementById("btn_modal_quote");
const btn_close_modal = document.getElementById("btn_close_modal");

const open_modal = document.querySelectorAll(".open_modal");


open_modal.forEach(e => {
  e.addEventListener("click", () => {
    modal_quote.classList.remove("hidden");
  });
});

btn_modal_quote.addEventListener("click", () => {
  modal_quote.classList.remove("hidden");
})

btn_close_modal.addEventListener("click", () => {
  modal_quote.classList.add("hidden");
})

btn_form_Quote.addEventListener("click", () => {
  modal_quote.classList.add("hidden");
  
})

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

