<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space/>
    <q-btn
      v-close-popup
      icon="close"
      dense
      flat
      round
    >
    </q-btn>
  </q-card-section>
</template>

<script>
export default {
  name: "ModalHeader"
}
</script>

<style scoped>

</style>
