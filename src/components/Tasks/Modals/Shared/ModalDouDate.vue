<template>
  <div class=" row q-mb-sm">
    <q-input
      outlined
      label="Date"
      :value="douDate"
    >
      <template v-slot:append>
        <q-icon
          v-if="douDate"
          @click="$emit('clear')"
          @input="$emit('update:douDate',$event)"
          name="close"
          class="cursor-pointer"/>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              @input="$emit('update:douDate',$event)"
              :value="douDate">
              <div class="row items-center justify-end">
                <q-btn
                  v-close-popup label="Close"
                  color="primary" flat/>
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalDouDate",
  props: ['douDate']
}
</script>

<style scoped>

</style>
