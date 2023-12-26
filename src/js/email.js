import emailjs from '@emailjs/browser';

const form = document.querySelector('.send-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs
    .sendForm('service_lhuujek', 'template_8e0771j', form, 'r_mAGUgiAT2flfypv')
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
});
