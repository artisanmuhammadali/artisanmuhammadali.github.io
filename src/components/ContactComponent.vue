<template>
  <div class="app-contact-section mb-5" name="Contact">
    <h2 class="app-text app-styles-preset">LET'S WORK<br class="app-text"><span
        class="app-text">TOGETHER</span></h2>
    <div class="d-contents">
      <div class="app-contact-container">
        <form class="app-form app-form-control" ref="form" @submit.prevent="sendEmail">
          <div class="app-form-row">
            <label class="app-label">
              <div class="app-form-control">
                <p class="app-text">Name</p>
              </div>
              <div class="input-div app-form-text-input app-form-input-wrapper app-1xhb14s"><input
                  type="text" required name="from_name" placeholder="Your Name"
                  class="app-form-input app-form-input-empty" value="">
              </div>
            </label>
            <label class="app-label">
              <div class="app-form-control">
                <p class="app-text">Email</p>
              </div>
              <div class="input-div app-form-text-input app-form-input-wrapper app-email-input"><input
                  type="email" required placeholder="Your@email.com"
                  class="app-form-input app-form-input-empty" name="from_email"></div>
            </label>
          </div>
          <label class="app-textarea-label">
            <div class="app-form-control">
              <p class="app-text">Message</p>
            </div>
            <div class="input-div app-form-text-input app-form-input-wrapper app-87l6yk"><textarea required
                name="message" placeholder="Message" class="app-form-input"></textarea></div>
          </label>
          <div class="app-btn-container" id="contact">
            <button type="submit" class="app-btn app-btn-primary" data-reset="button" tabindex="0">
              <div class="app-btn-text-div">
                <p class="app-text btn-text">Submit</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, this.$refs.form, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Thank you!",
              text: "I have received your message and will get back to you shortly. Please keep an eye on your email for my response.",
            });
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to send your message. Please try again.",
            });
          },
        );
        this.$refs.form.reset()
    },
  },
};
</script>