<template>
  <section class="novel-mobile-reader_main"
    ref="chapterContent">
    <van-nav-bar 
    :left-text="chapter[chapter.length - 2].title"></van-nav-bar>

    <div :class="{content: true, 'transtion': animation && !touchOffset}" 
    :style="{transform: `translateX(-${calcPage + touchOffset}px)`}">
      <h2>{{chapter[chapter.length - 2].title}}</h2>
      <div v-html="chapter[chapter.length - 2].content"></div>
    </div>

    <van-row class="footer" justify="space-between">
      <van-col>09:44</van-col>
      <van-col>{{currentPage + 1}}/{{totalPage + 1}}</van-col>
    </van-row>
  </section>
</template>

<script>
import AlloyFinger from 'alloyfinger'
import { toRefs, computed, reactive } from 'vue'

export default {
  props: {
    chapter: Object
  },

  setup() {
    let state = reactive({
      af : null,
      deviceWidth: 0,
      touchOffset: 0,
      currentPage: 0,
      totalPage: 0,
      animation: false,
      prev: false,
      calcPage: computed(() => {
        return state.currentPage * (state.deviceWidth - 16)
      }),
    })

    return {
      ...toRefs(state),
    }
  },

  watch: {
    chapter:{
      deep: true,
      handler: function(){
        this.currentPage = 0;
        setTimeout(() => {
          this.totalPage = Math.ceil(this.$refs.chapterContent.scrollWidth / this.deviceWidth) - 1
          this.currentPage = (this.currentPage == 0 && this.prev) ? 0 : this.totalPage;
        }, 0);
      }
    }
  },

  methods: {
    getFinger(){
      let _this = this;
      this.af = new AlloyFinger(this.$refs.chapterContent, {
        touchStart(ev){
          let touch = ev.changedTouches[0]
          this.touch = touch;
        },
        touchMove(ev){
          let touch = ev.changedTouches[0]
          let offsetX = this.touch.clientX - touch.clientX

          _this.touchOffset = offsetX;
        },
        touchEnd(){
          _this.touchOffset = 0;
        },
        swipe(ev){
          let index = 0;
          if(ev.direction == 'Left'){
            _this.currentPage < _this.totalPage && index++
            // 最后一页是进入下一章，且页面归零
            if(_this.currentPage == _this.totalPage) _this.cutChapt(1)

          } else if(ev.direction == 'Right'){
            _this.currentPage >= 1 && index--
            //  返回上一章
            if(_this.currentPage == 0) _this.cutChapt(0)
          }

          _this.currentPage += index;
        },
        tap(ev){
          let position = ev.changedTouches[0].clientX,
              width = _this.deviceWidth;
          _this.animation = true;
          // 屏幕三等分，根据点击位置确定翻页方向
          if(position < width / 3){
            if(_this.currentPage > 0) _this.currentPage--;
            //  返回上一章
            else if(_this.currentPage - 1 < 0) _this.cutChapt(0);
          } else if (position > width / 3 && position < width - (width / 3)){
             _this.$emit('getTool')
          } else{
            _this.currentPage <= _this.totalPage && _this.currentPage++;
            // 最后一页是进入下一章，且页面归零
            if(_this.currentPage >= _this.totalPage + 1) _this.cutChapt(1)
          }
        }
      })
    },

    cutChapt(flag){
      this.$emit('cutChapter',flag)
      this.prev = flag
      this.animation = false;
    }
  },

  mounted(){
    this.getFinger();
    this.deviceWidth = this.$refs.chapterContent.clientWidth
    this.totalPage = Math.ceil(this.$refs.chapterContent.scrollWidth / this.deviceWidth) - 1;
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 46px;
  z-index: 99;
  background-color: #fff;

  &__text{
    font-size: 14px;
    color: #999;
  }
  &::after{
    border-bottom-width: 0 !important;
  }
}

.novel-mobile-reader_main{
  position: relative;
  padding-top: 46px;
  width: 100%;
  height: calc(100vh - 32px);
  overflow: hidden;
  background-color: #fff;

  .content{
    padding: 0 16px;
    height: 100%;
    columns: calc(100vw - 32px) 1;
    column-gap: 16px;
    will-change: transform;

    h2{
      font-weight: 100;
      font-size: 32px;
    }
    p{
      margin: 16px 0;
      line-height: 30px;
      font-weight: 100;
      font-size: 18px;
    }
  }

  .transtion{
    transition: transform .3s;
  }

  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    color: #999;
    z-index: 99;
    background-color: #fff;
  }
}
</style>