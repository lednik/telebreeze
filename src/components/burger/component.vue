<template>
  <div class="burger" :class="{ burger_open: isMenu }" @click="$emit('change-is-menu')">
    <div class="burger__container">
        <div class="burger__line burger__line_1"></div>
        <div class="burger__line burger__line_2"></div>
        <div class="burger__line burger__line_3"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['isMenu'],
  data () {
    return {
        // isMenu: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
