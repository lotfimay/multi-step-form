<template>
  <div class="plan">
    <div class="img-container">
      <img :src="icon" alt="" />
    </div>
    <div class="plan-infos">
      <h3 class="plan-name">{{ name }}</h3>
      <p v-if="period == 'Monthly'" class="plan-price">${{ price }}/mo</p>
      <template v-else>
        <p class="plan-price">${{ price * 10 }}/yo</p>
        <p class="extra-info">2 months free</p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'price', 'icon', 'period'],
};
</script>
<style scoped>
.plan {
  width: 11rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid hsl(229, 24%, 87%);
  caret-color: transparent;
}

.plan:hover {
  border: 1px solid var(--Purplish--blue);
  cursor: pointer;
}

.img-container {
  margin-bottom: 3rem;
}

.plan-infos {
  margin-top: 3rem;
}

.plan-infos .plan-name {
  color: var(--Marine--blue);
  margin-bottom: 0.25rem;
}
.plan-infos .plan-price {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: var(--Cool--gray);
}

.plan-infos .extra-info {
  color: var(--Marine--blue);
  margin-top: 0.25rem;
}
</style>
