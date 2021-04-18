<template>
  <div class=" row q-mb-sm">
    <q-input
      outlined
      label="Time"
      :value="douTime"
      @input="$emit('update:douTime',$event)"

    >
      <template v-slot:append>
        <q-icon
          name="access_time"
          class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :value="douTime"
              @input="$emit('update:douTime',$event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat/>
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalDouTime",
  props: ['douTime']
}
</script>

<style scoped>

</style>
