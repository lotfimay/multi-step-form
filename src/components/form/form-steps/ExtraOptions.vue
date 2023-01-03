<template>
  <div class="form">
    <div class="form-header">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhace your gaming experience.</p>
    </div>
    <div class="options">
      <extra-option
        v-for="(option, index) in extraOptions"
        :key="index"
        :name="option.name"
        :description="option.description"
        :price="option.price"
        :addOption="addOption"
        :removeOption="removeOption"
      />
    </div>
    <div class="actions">
      <p @click="this.previousStep()">Go Back</p>
      <button @click="this.validateData()">Next Step</button>
    </div>
  </div>
</template>
<script>
import ExtraOption from './extra-options/ExtraOption.vue';
export default {
  components: {
    ExtraOption,
  },
  inject: ['nextStep', 'previousStep', 'addExtraOptions'],
  data() {
    return {
      extraOptions: [
        {
          name: 'Online service',
          description: 'Access to multiplayer games',
          price: 1,
        },
        {
          name: 'Larger storage',
          description: 'Extra 1TB of cloud save',
          price: 2,
        },
        {
          name: 'Customizable Profile',
          description: 'Custom theme on your profile',
          price: 2,
        },
      ],
      selectedOptions: [],
    };
  },
  methods: {
    addOption(optionName) {
      const option = this.extraOptions.filter(
        (option) => option.name === optionName
      )[0];
      this.selectedOptions.push(option);
    },
    removeOption(optionName) {
      this.selectedOptions.forEach((option, index) => {
        if (option.name === optionName) this.selectedOptions.splice(index);
      });
    },
    validateData() {
      this.addExtraOptions(this.selectedOptions);
      this.nextStep();
    },
  },
};
</script>
<style scoped>
.form {
  margin: 4rem;
  width: 28rem;
  height: fit-content;
}
.form-header h1 {
  color: hsl(213, 96%, 18%);
  margin-bottom: 0.5rem;
}
.form-header p {
  color: hsl(231, 11%, 63%);
  margin-top: 0.5rem;
}
.options {
  margin-top: 3rem;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
}
.actions p {
  color: var(--Cool--gray);
  font-weight: 500;
}

.actions p:hover {
  color: var(--Marine--blue);
  cursor: pointer;
}
.actions button {
  padding: 0.75rem 1.25rem;
  background-color: hsl(213, 96%, 18%);
  color: white;
  font-family: inherit;
  border-radius: 5px;
  border: 1px solid hsl(213, 96%, 18%);
  color: white;
  font-weight: 500;
  display: block;
  margin-left: auto;
  cursor: pointer;
}
</style>
