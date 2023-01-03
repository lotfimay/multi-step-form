<template>
  <div class="side-bar">
    <ul class="steps">
      <side-bar-step
        v-for="(step, index) in steps"
        :key="index"
        :stepNumber="index + 1"
        :stepTitle="step.title"
        :currentStep="currentStep"
      />
    </ul>
  </div>
</template>
<script>
import SideBarStep from './SideBarStep.vue';
export default {
  components: {
    SideBarStep,
  },
  props: ['currentStep'],
  data: () => {
    return {
      steps: [
        { title: 'Your Info' },
        { title: 'Select Plan' },
        { title: 'Add-ONS' },
        { title: 'Summary' },
      ],
    };
  },
};
</script>
<style scoped>
.side-bar {
  border-radius: 10px;
  background: url('../../../assets/bg-sidebar-desktop.svg');
  background-size: cover;
  width: 22rem;
}
.steps {
  margin-top: 1.5rem;
}
</style>
