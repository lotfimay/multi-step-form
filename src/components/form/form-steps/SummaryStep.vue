<template>
  <div class="form">
    <div class="form-header">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
    </div>
    <div class="bill">
      <div class="bill-header">
        <div class="selected-plan">
          <p>{{ data.plan.name }}({{ data.plan.billingPeriod }})</p>
          <span @click="this.changePlan">Change</span>
        </div>
        <div class="price">
          <p v-if="data.plan.billingPeriod == 'Monthly'">
            ${{ data.plan.price }}/mo
          </p>
          <p v-else>${{ data.plan.price * 10 }}/yo</p>
        </div>
      </div>
      <div class="horizental-line"></div>
      <ul class="extra-options">
        <li v-for="(option, index) in data.extraOptions" :key="index">
          <p class="option-name">{{ option.name }}</p>
          <p class="option-price" v-if="data.plan.billingPeriod == 'Monthly'">
            +${{ option.price }}/mo
          </p>
          <p class="option-price" v-else>+${{ option.price * 10 }}/yo</p>
        </li>
      </ul>
    </div>
    <div class="total-price">
      <template v-if="data.plan.billingPeriod == 'Monthly'">
        <p>Total (per month)</p>
        <h3>+${{ this.getTotalMonthly }}/mo</h3>
      </template>
      <template v-else>
        <p>Total (per year)</p>
        <h3>+${{ this.getTotalYearly }}/yo</h3>
      </template>
    </div>
    <div class="actions">
      <p @click="this.previousStep()">Go Back</p>
      <button>Confirm</button>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['data', 'changePlan', 'previousStep'],
  computed: {
    getTotalMonthly() {
      let price = this.data.plan.price;
      for (let index in this.data.extraOptions) {
        price += this.data.extraOptions[index].price;
      }
      return price;
    },
    getTotalYearly() {
      let price = this.data.plan.price * 10;
      for (let index in this.data.extraOptions) {
        price += this.data.extraOptions[index].price * 10;
      }
      return price;
    },
  },
};
</script>
<style scoped>
.form {
  margin: 4rem;
  width: 30rem;
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
.bill {
  width: 30rem;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--Magnolia);
}

.bill .bill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Marine--blue);
  font-weight: 700;
  cursor: pointer;
}
.bill-header .selected-plan span {
  color: var(--Cool--gray);
  text-decoration: underline;
  display: inline-block;
  margin-top: 0.25rem;
}
.bill-header .selected-plan span:hover {
  color: var(--Purplish--blue);
}
.bill .horizental-line {
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1px;
  background-color: var(--Light--gray);
}

.bill .extra-options li {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
li .option-name {
  color: var(--Cool--gray);
}
li .option-price {
  color: var(--Marine--blue);
}
.total-price {
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-price p {
  color: var(--Cool--gray);
}
.total-price h3 {
  color: var(--Purplish--blue);
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
  background-color: var(--Marine--blue);
  color: white;
  font-family: inherit;
  border-radius: 5px;
  border: 1px solid var(--Marine--blue);
  color: white;
  font-weight: 500;
  display: block;
  margin-left: auto;
  cursor: pointer;
}
</style>
