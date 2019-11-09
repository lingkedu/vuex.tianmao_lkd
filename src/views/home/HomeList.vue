<template>
  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        <div v-if = "movies" class="list-wrap-o">
          <home-item :data = "item" v-for = "item in movies.movieList" :key = "item.id"></home-item>
        </div>     
      </div>
    </div>
    <Loading v-if = "loadingFlag"></Loading>
  </div>
</template>

<script>
import HomeItem from "./HomeItem";
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { mapActions,mapState } from 'vuex';
import { Toast } from 'mint-ui'
export default {
  props: ["movies"],
  components: {
    HomeItem
  },
  methods: {
    ...mapActions(['getComingMovies','showLoading','hideLoading'])
  },
  computed: {
    ...mapState({
      loadingFlag: state => state.home.loadingFlag
    })
  },
  mounted () {
     let count=0
     const bs= new BScroll('.page',{
       pullUpLoad: {
        threshold: 30 // 举例底部多少的时候开始加载
       }
     })

    bs.on("pullingUp",() => {// 上拉加载必须有一个选项要配置   pullUpload)
      const movieIds = this.movies.movieIds.slice( 12 )
      const ids = _.chunk( movieIds,10 )
      // console.log("零刻度: mounted -> ids", ids[ count ])

      if ( count == ids.length) {
       
        Toast({
          message: '已经没有更多的电影了',
          position: 'bottom',
          duration: 2000
        });
        // console.log('已经没有数据了')// 必须告诉他拉动结束了
         bs.finishPullUp() 
        return;
      }
 
        if ( count < ids.length ) {
            // 可以啦 - 可以进行数据请求了
            // console.log('进行数据请求') 

              this.showLoading()         
              this.getComingMovies( ids[ count ].join(',') )
            setTimeout(() => {
               this.hideLoading()
            },1000)
          }
     bs.finishPullUp() // 必须告诉他拉动结束了
     count ++
     }) 
   }
};
</script>

<style lang="stylus" scoped>
.tab-content {
  height: 100%;

  .page {
    height: 100%;
  }
}
</style>