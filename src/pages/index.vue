<template>
  <div id="home">
    <div v-if="pageData && pageData != {}" class="home__content">
      <div v-if="pageData.content.image_url && pageData.content.image_url !=''" class="home__image">
        <img :src="pageData.content.image_url" alt="image">
      </div>
      <div class="home__info">
        <h1 v-if="pageData.content.header && pageData.content.header != ''" class="home__title">{{pageData.content.header}}</h1>
        <h2 v-if="pageData.content.short_text && pageData.content.short_text != ''" class="home__subtitle">{{pageData.content.short_text}}</h2>
        <p v-if="pageData.content.full_text && pageData.content.full_text != ''" class="home__full-text">{{pageData.content.full_text}}</p>
        <div v-if="pageData.content.full_text_btn_title && pageData.content.full_text_btn_title" class="home__button">{{pageData.content.full_text_btn_title}}</div>
      </div>
    </div>
    <!-- {{$route.params.id}} -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      pageData: {}
    }
  },
  watch: {
    '$route.params.id': function() {
      this.pageData =  this.getPage(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters('menu', ['getPage'])
  },
  beforeRouteEnter (to, from, next) {
    next(
        vm => {
          vm.pageData =  vm.getPage(vm.$route.params.id);
        }
    );
  },
  // beforeRouteUpdate (to, from, next) {
  //   this.pageData =  this.getPage(to.$route.params.id);
  //   setTimeout(() => {
  //     next();
  //   }, 2000);
  // },
}
</script>

<style lang="scss">

</style>
