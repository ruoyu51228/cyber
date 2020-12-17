<template>
  <section>
    <van-tree-select 
    v-model:main-active-index="state.mainActiveIndex"
    :items="items"
    @click-nav="clickNav"
    height="calc(100vh - 49px)" >

      <template #content>
        <div class="novel-mobile-classify_list">
          <div class="novel-mobile-classify_list-item"
            v-for="(item,key) in items[state.mainActiveIndex].children" 
            :key="key">
            <div class="cover"
            :style="{backgroundImage: `url(${item.cover})`}"></div>
            <div class="classify-title">{{item.text}}</div>
          </div>
        </div>
      </template>

    </van-tree-select>
  </section>
</template>

<script>
import {reactive} from 'vue'

export default {
  setup() {
    const state = reactive({
      mainActiveIndex: 0
    })

    const items = [
      {
        text: '男频',
        children: [
          {
            text: '玄幻',
            cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          }, {
            text: '奇幻',
            cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          }, {
            text: '都市',
            cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          }
        ]
      }, 
      {
        text: '女频',
        children: [
          {
            text: '现代言情',
            cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          }, {
            text: '古代言情',
            cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          }
        ]
      }
    ]

    return {
      state, items
    }
  },

  methods: {
    clickNav(index){
      this.state.mainActiveIndex = index;
      return this.state
    }
  }
}
</script>

<style lang="scss">
.van-sidebar{
  width: 80px !important;
  overflow: hidden;
  a{ width: 80px; }
}
.van-tree-select__content{
  flex: 4;
  padding: 8px;
}
.novel-mobile-classify_list{
  display: flex;
  flex-wrap: wrap;

  &-item{
    display: flex;
    flex-shrink: 0;
    width: 49%;
    align-items: center;

    .cover{
      display: inline-block;
      margin: 8px;
      width: 55px;
      height: 77px;
      vertical-align: middle;
      background: #999 no-repeat center/cover;
    }
    .classify-title{
      display: inline-block;
    }
  }
}
</style>