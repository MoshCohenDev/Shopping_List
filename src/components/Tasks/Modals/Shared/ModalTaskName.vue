<template>
  <div class=" row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name',$event)"
      label="NewTask"
      class="col"
      autofocus
      v-select-all
      ref="name"
      :rules="[ val => val && val.length > 0 || 'Please type something']"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name','')"
          name="close"
          class="cursor-pointer"/>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalTaskName",
  props: ['name'],
  directives: {
    selectAll: {
      inserted(el) {
        let input = el.querySelector('.q-field__native')
        input.addEventListener('focus', () => {
            if (input.value.length) {
              input.select()
            }
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
