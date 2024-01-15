import emailjs from '@emailjs/browser';

const modal = document.querySelector('[data-modal]');
const form = document.querySelector('.send-form');
const alertMessage = `<div class="form-field alert-message">
<p>Please fill in all the fields!</p>
</div>`;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, name, tel, fav, comment },
  } = e.currentTarget;

  if (!email.value || !name.value || !tel.value || !fav.value) {
    modal.classList.add('is-hidden');
    document.querySelector('.alert-message')?.remove();
    return form.insertAdjacentHTML('beforeend', alertMessage);
  } else {
    modal.classList.remove('is-hidden');
    document.querySelector('.alert-message')?.remove();
    // const userData = { [email.value]: name.value };
    e.target.reset();
    // emailjs
    //   .sendForm('service_lhuujek', 'template_8e0771j', form, 'r_mAGUgiAT2flfypv')
    //   .then(
    //     function (response) {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     function (error) {
    //       console.log('FAILED...', error);
    //     }
    //   );
  }
}
