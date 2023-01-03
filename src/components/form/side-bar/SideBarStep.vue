<template>
  <li class="step">
    <div class="step-number" :class="{ active: stepNumber == currentStep }">
      <p>{{ stepNumber }}</p>
    </div>
    <div class="step-infos">
      <p class="step-label">step {{ stepNumber }}</p>
      <p class="step-title">{{ stepTitle }}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: ['stepNumber', 'stepTitle', 'currentStep'],
};
</script>
<style scoped>
.step {
  margin: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}

.step .step-number {
  border: 2px solid hsl(228, 100%, 84%);
  border-radius: 100%;
  padding: 0.5rem 01rem;
}

.step-number.active {
  background-color: hsl(228, 100%, 84%);
  color: black;
}

.step .step-number p {
  font-size: 1.25rem;
  font-weight: 700;
}

.step-infos .step-label {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: hsl(229, 24%, 87%);
}
.step-infos .step-title {
  font-weight: 500;
  text-transform: uppercase;
  color: white;
}
</style>
