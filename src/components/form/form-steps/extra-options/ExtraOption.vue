<template>
  <div class="extra-option" :class="{ 'selected-option': isSelected }">
    <input type="checkbox" name="" id="" v-model="isSelected" />
    <div class="option-infos">
      <p class="option-name">{{ name }}</p>
      <p class="option-description">{{ description }}</p>
    </div>
    <p class="option-price">+${{ price }}/mo</p>
  </div>
</template>
<script>
export default {
  props: ['name', 'description', 'price', 'addOption', 'removeOption'],
  data() {
    return {
      isSelected: false,
    };
  },
  watch: {
    isSelected(newValue, oldValue) {
      console.log(oldValue);
      if (newValue) {
        this.addOption(this.name);
      } else this.removeOption(this.name);
    },
  },
};
</script>
<style scoped>
.extra-option {
  display: flex;
  padding: 1rem;
  align-items: center;
  width: 28rem;
  gap: 1rem;
  border: 1px solid var(--Light--gray);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.option-infos .option-name {
  color: var(--Marine--blue);
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.option-infos .option-description {
  color: var(--Cool--gray);
  margin-top: 0.25rem;
}
.option-price {
  margin-left: auto;
}

.extra-option:hover,
.selected-option {
  background-color: hsl(231, 100%, 99%);
  border: 1px solid var(--Purplish--blue);
  cursor: pointer;
}
input {
  width: 1rem;
  height: 2rem;
  accent-color: var(--Purplish--blue);
  border: 1px solid var(--Light--gray);
}
</style>
