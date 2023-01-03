<template>
  <div class="form">
    <div class="form-header">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <div class="errors" v-if="error">
      <p>Please select a plan so you could continue.</p>
    </div>
    <div class="plans">
      <plan-option
        v-for="(plan, index) in plans"
        :class="{ 'selected-plan': plan.name === selectedPlan }"
        @click="setSelectedPlan(plan.name)"
        :key="index"
        :name="plan.name"
        :price="plan.price"
        :icon="plan.icon"
        :period="selectedPeriod"
      />
    </div>
    <div class="payment-period">
      <span :class="{ 'selected-period': selectedPeriod === 'Monthly' }"
        >Monthly</span
      >
      <round-switch :onCLick="changePaymentPeriod" />
      <span :class="{ 'selected-period': selectedPeriod === 'Yearly' }"
        >Yearly</span
      >
    </div>
    <div class="actions">
      <p @click="this.previousStep()">Go Back</p>
      <button @click="validateData()">Next Step</button>
    </div>
  </div>
</template>
<script>
import arcadeIcon from '../../../assets/icon-arcade.svg';
import advancedIcon from '../../../assets/icon-advanced.svg';
import proIcon from '../../../assets/icon-pro.svg';
import PlanOption from './plans/PlanOption.vue';

export default {
  inject: ['nextStep', 'previousStep', 'addPlan'],
  components: { PlanOption },
  data() {
    return {
      plans: [
        { name: 'Arcade', icon: arcadeIcon, price: 9 },
        { name: 'Advanced', icon: advancedIcon, price: 12 },
        { name: 'Pro', icon: proIcon, price: 15 },
      ],
      selectedPlan: null,
      selectedPeriod: 'Monthly',
      error: false,
    };
  },
  methods: {
    setSelectedPlan(selectedPlan) {
      this.selectedPlan = selectedPlan;
    },
    changePaymentPeriod() {
      if (this.selectedPeriod === 'Monthly') this.selectedPeriod = 'Yearly';
      else this.selectedPeriod = 'Monthly';
    },
    validateData() {
      if (this.selectedPlan === null) {
        this.error = true;
        return;
      }
      const plan = this.plans.filter(
        (plan) => plan.name === this.selectedPlan
      )[0];
      plan.billingPeriod = this.selectedPeriod;
      this.addPlan(plan);
      this.nextStep();
    },
  },
  provide() {
    return {
      changePaymentPeriod: this.changePaymentPeriod,
    };
  },
};
</script>
<style scoped>
.form {
  margin: 4rem;
  height: fit-content;
  width: 35rem;
  /* background-color: red; */
}
.form-header h1 {
  color: hsl(213, 96%, 18%);
  margin-bottom: 0.5rem;
}
.form-header p {
  color: hsl(231, 11%, 63%);
  margin-top: 0.5rem;
}
.plans {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  /* gap: 1rem; */
  /* background-color: blue; */
}
.selected-plan {
  border: 1px solid var(--Purplish--blue);
  cursor: pointer;
}
.payment-period {
  margin-top: 2rem;
  background-color: var(--Magnolia);
  padding: 0.5rem 0;
  border-radius: 10px;
  color: var(--Cool--gray);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
span.selected-period {
  color: var(--Marine--blue);
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
.errors {
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: red;
  font-weight: 500;
}
</style>
