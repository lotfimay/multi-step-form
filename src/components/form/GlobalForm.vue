<template>
  <div class="form-container">
    <side-bar :currentStep="currentStep < 5 ? currentStep : currentStep - 1" />
    <div class="form-steps">
      <keep-alive>
        <component :is="steps[currentStep - 1]" />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import SideBar from './side-bar/SideBar.vue';
import PersonalInfo from './form-steps/PersonalInfo.vue';
import PlanSelection from './form-steps/PlanSelection.vue';
import ExtraOptions from './form-steps/ExtraOptions.vue';
import SummaryStep from './form-steps/SummaryStep.vue';
import ThankYouPage from './form-steps/ThankYouPage.vue';
export default {
  components: {
    SideBar,
    PersonalInfo,
    PlanSelection,
    ExtraOptions,
    SummaryStep,
    ThankYouPage,
  },
  data() {
    return {
      currentStep: 1,
      steps: [
        'personal-info',
        'plan-selection',
        'extra-options',
        'summary-step',
        'thank-you-page',
      ],
      data: new Object(),
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) this.currentStep++;
    },
    previousStep() {
      if (this.currentStep > 1) this.currentStep--;
    },
    goToPlanSelection() {
      this.currentStep = 2;
    },
    addPersonalInfo(PersonalInfo) {
      this.data.PersonalInfo = PersonalInfo;
    },
    addPlan(plan) {
      this.data.plan = plan;
    },
    addExtraOptions(extraOptions) {
      this.data.extraOptions = extraOptions;
    },
  },
  computed: {
    getData() {
      return this.data;
    },
  },
  provide() {
    return {
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      addPersonalInfo: this.addPersonalInfo,
      addPlan: this.addPlan,
      addExtraOptions: this.addExtraOptions,
      changePlan: this.goToPlanSelection,
      data: this.data,
    };
  },
};
</script>
<style scoped>
.form-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  gap: 1rem;
}
.form-steps {
  flex-grow: 1;
}
</style>
