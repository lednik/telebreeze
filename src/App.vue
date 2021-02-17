<template>
  <div id="app">
    <header-cmp></header-cmp>
    <menu-cmp v-if="menu.length > 0" @close-menu="isMenu = false" :isMenu="isMenu"></menu-cmp>
    <burger v-if="menu.length > 0" :isMenu="isMenu" @change-is-menu="isMenu=!isMenu"></burger>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import menu from './components/menu/component.vue'
import burger from "./components/burger/component"
import header from './components/header/component'
import {mapActions, mapState} from 'vuex';


export default {
  name: 'app',
  data () {
    return {
      isMenu: false
    }
  },
  watch: {
    '$route': function() {
      if(this.$route.path == '/' && this.menu.length > 0) {
        this.$router.push({path: '/' + this.menu[0].id})
      }
    }
  },
  components: {
    'menu-cmp': menu,
    burger,
    'header-cmp': header
  },
  computed: {
    ...mapState("menu", ["menu"])
  },
  methods: {
    ...mapActions("menu", ["getData"]),
  },
  created() {
    if(this.$route.path == '/' && this.menu.length > 0) {
      this.$router.push({path: '/' + this.menu[0].id})
    }
    this.getData();
  }

}
</script>

<style lang="scss">

</style>
