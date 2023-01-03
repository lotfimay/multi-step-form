<template>
  <div class="form">
    <div class="form-header">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form action="" @submit.prevent="validateData">
      <div class="form-control">
        <div class="labels">
          <label for="name">Name</label>
          <label for="name" class="error-label" v-if="errors[0]">
            This field is required</label
          >
        </div>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          v-model="name"
          :class="{ 'error-input': errors[0] == 1 }"
        />
      </div>
      <div class="form-control">
        <div class="labels">
          <label for="email">Email Address</label>
          <label for="email" class="error-label" v-if="errors[1]"
            >This field is required</label
          >
        </div>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          v-model="emailAddress"
          :class="{ 'error-input': errors[1] == 1 }"
        />
      </div>
      <div class="form-control">
        <div class="labels">
          <label for="phoneNumber">Phone Number</label>
          <label for="phoneNumber" class="error-label" v-if="errors[2]"
            >This field is required</label
          >
        </div>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          id="phoneNumber"
          v-model="phoneNumber"
          :class="{ 'error-input': errors[2] == 1 }"
        />
      </div>
      <button>Next Step</button>
    </form>
  </div>
</template>
<script>
export default {
  inject: ['nextStep', 'addPersonalInfo'],
  data() {
    return {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      errors: [0, 0, 0],
    };
  },
  methods: {
    validateData() {
      this.errors = [0, 0, 0];
      if (this.name === '') {
        this.errors[0] = 1;
        return;
      }
      if (this.emailAddress === '') {
        this.errors[1] = 1;
        return;
      }
      if (this.phoneNumber === '') {
        this.errors[2] = 1;
        return;
      }
      const data = {
        name: this.name,
        email: this.emailAddress,
        phoneNumber: this.phoneNumber,
      };
      this.addPersonalInfo(data);
      this.nextStep();
    },
  },
};
</script>
<style scoped>
.form {
  margin: 4rem;
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
form {
  margin-top: 3rem;
  width: 35rem;
  color: hsl(213, 96%, 18%);
}
.form-control {
  margin: 1.5rem 0;
}
.form-control .labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-control .lables label {
  margin-bottom: 0.5rem;
  font-weight: 400;
}
.form-control input {
  display: block;
  width: 100%;
  color: hsl(213, 96%, 18%);
  margin-top: 0.5rem;
  padding: 1rem;
  border: 1px solid hsl(229, 24%, 87%);
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
}

.form-control input:focus-visible,
.form-control input:hover {
  outline: none;
  border: 1px solid hsl(243, 100%, 62%);
}

.form-control input::placeholder {
  font-weight: 500;
  color: hsl(231, 11%, 63%);
}
button {
  padding: 0.75rem 1.25rem;
  margin-top: 5rem;
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
.error-label {
  color: red;
  font-weight: bold;
}

input.error-input {
  border: 1px solid red;
}
</style>
