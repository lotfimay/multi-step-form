<template>
  <div class="wrapper">
    <div class="thank-container">
      <div class="icon-container">
        <img :src="getIcon" alt="" />
      </div>
      <div class="text">
        <h1 class="title">Thank you!</h1>
        <p class="message">
          Thanks for confirming your subscription! We hope you have <br />
          fun using our platform. If you ever need support, please feel <br />
          free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import thankYouIcon from '../../../assets/icon-thank-you.svg';
export default {
  computed: {
    getIcon() {
      return thankYouIcon;
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.thank-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.text .title {
  color: var(--Marine--blue);
  margin-bottom: 1rem;
}

.text .message {
  line-height: 1.6rem;
  color: var(--Cool--gray);
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
