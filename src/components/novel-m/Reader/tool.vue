<template>
  <section class="novel-mobile-reader_tool">
    <van-nav-bar
    left-arrow
    title="诡秘之主"></van-nav-bar>

    <div class="add-book" v-if="!chapter.add">加入书架</div>

    <van-tabbar>
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" @click.stop="listStatus">目录</van-tabbar-item>
    </van-tabbar>

    <div :class="{'chapterList-box':true, active: showList}" @click.self="listStatus">
      <div class="chapterList">
        <div class="chapterList__title">目录</div>
        
        <list-view
        class="listViewRef"
        ref="listViewRef"
        :list="chapList"
        :default-item-height="40"
        style="height: calc(100% - 46px);">
          <template #list="slot">
            <div :style="{color: chapter[chapter.length -2].id == slot.item.id ? 'var(--main-color)' : ''}"
            >{{slot.item.id}}.{{slot.item.title}}</div>
          </template>
        </list-view>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, toRefs, reactive, onMounted, nextTick } from 'vue'
import listView from './list-view'

export default {
  components: {
    listView
  },

  props: {
    chapter: Object,
    chapList: Array,
  },

  setup(props) {
    let state = reactive({
      showList: false,
      listStatus: function(){
        state.showList = !state.showList
      }
    })
    let listViewRef = ref(null)

    onMounted(() => {
      nextTick(() => {
        // let chapter = props.chapter
        listViewRef.value.$el.scrollTop = 2280;
        // console.log((chapter[chapter.length - 2].id * 40) - 120);
      })
    })

    return {
      listViewRef,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.novel-mobile-reader_tool /deep/ .van-nav-bar{
  background-color: #333;

  &__title{ color: #fff; }
  .van-icon{ color: #fff; }
}
.novel-mobile-reader_tool /deep/ .van-tabbar{
  z-index: 99;
  background-color: #333;

  &-item{
    color: #999;
    &--active{
      color: #999;
      background-color: #333;
    }
  }
}
.add-book{
  position: fixed;
  right: 0;
  top: 60px;
  padding: 8px 16px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  background-color: #333;
}
.chapterList-box{
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.08);

  .chapterList{
    position: relative;
    left: -80%;
    width: 80%;
    height: 100vh;
    overflow-y: auto;
    transition: .3s linear;
    background-color: #fff;

    .listViewRef{
      div{
        padding-left: 16px;
        line-height: 40px;
      }
    }

    &__title{
      text-align: center;
      line-height: 45px;
      border-bottom: 1px solid var(--main-color);
    }
  }
}
div.active{
  visibility: visible;
  & .chapterList{ left: 0; }
}
</style>