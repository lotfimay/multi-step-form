<template>
  <div class="container">
    <global-form />
  </div>
</template>

<script>
import GlobalForm from './components/form/GlobalForm.vue';
export default {
  name: 'App',
  components: {
    GlobalForm,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

:root {
  --Marine--blue: hsl(213, 96%, 18%);
  --Purplish--blue: hsl(243, 100%, 62%);
  --Pastel--blue: hsl(228, 100%, 84%);
  --Light--blue: hsl(206, 94%, 87%);
  --Strawberry--red: hsl(354, 84%, 57%);
  --Cool--gray: hsl(231, 11%, 63%);
  --Light--gray: hsl(229, 24%, 87%);
  --Magnolia: hsl(217, 100%, 97%);
  --Alabaster: hsl(231, 100%, 99%);
  --White: hsl(0, 0%, 100%);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Ubuntu', sans-serif;
}
.container {
  height: 100vh;
  width: 100%;
  padding: 1rem;
}

ul {
  list-style-type: none;
}
</style>
