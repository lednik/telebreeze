<template>
  <transition name="fromLeft">
    <div  class="menu" v-if="isMenu">
      <div 
        v-for="item in menu" 
        class="menu__item" 
        v-link :href="'/'+item.id" 
        :key="'menu' + item.id"
        @click="$emit('close-menu')"
      >
        <div class="menu__top">
          <div class="menu__title">
            {{item.title}}
          </div>
          <div class="menu__arrow arrow">
          </div>
        </div>
        <div v-if="item.subtitle && item.subtitle != '' " class="menu__subtitle">
          {{item.subtitle}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'menu',
  props: ['isMenu'],
  data () {
    return {
      menu: []
    }
  },
  methods: {
    onClickOutside() {
      setTimeout(() => {
        this.$emit('close-menu');
      }, 200);
    }
  },
  components: {
    // burger
  },
  computed: {
    ...mapGetters("menu", ["getMenuItems"])
  },
  created() {
    this.menu =  this.getMenuItems;
  }
}
</script>

<style lang="scss">

</style>
