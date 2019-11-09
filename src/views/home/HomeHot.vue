<template>
  <div>
    <!-- 正在热映  -->
    <home-list :movies= "movies"/>
  </div>
</template>
<script>
import HomeList from './HomeList'
import { mapState,mapActions, mapMutations } from 'vuex'
export default {
  components:{
    HomeList
  },
  mounted () {
    // 做数据请求
    this.getMovies()
    // this.$store.dispatch('getMovies')   //传统操作
  },
  methods: {
    ...mapActions(['getMovies','getComingMovies']),   //新的操作
    // ...mapMutations(['GET_MOVIES'])   
  },
  computed:{
    // movies () {
    //   return this.$store.state.home.movies && this.$store.state.home.movies     //传统操作
    // },
    ...mapState({
      movies: state => state.home.movies,
      // name: state => state.home.name 
    }),
  }
}
</script>
<style lang="stylus" scoped>
  div
    flex 1 
    overflow hidden
</style>
