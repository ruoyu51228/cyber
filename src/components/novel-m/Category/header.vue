<template>
  <section class="novel-mobile-category_header">
    <van-nav-bar
    left-text="玄幻"
    left-arrow
    @click-right="showMenu"
    @click-left="goBack">
      <template #right>
        <div :class="{'diy-menu':true, 'open': state.menuShow}"></div>
      </template>
    </van-nav-bar>
    <van-search
    v-model="state.search"
    placeholder="输入作者或书名"
    input-align="center"></van-search>

    
  </section>
</template>

<script>
import { reactive } from 'vue'
import {goBack} from '@scripts/tools'

export default {
  setup() {
    const state = reactive({
      menuShow: false,
      search: ''
    })

    return {
      state
    }
  },

  methods: {
    goBack,
    showMenu(){
      this.state.menuShow = !this.state.menuShow
      return this.state
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  &__text,
  .van-icon{
    color: #333;
  }
}

.diy-menu{
  position: relative;
  width: 18px;
  height: 1px;
  transition: .2s;
  background-color: #333;

  &::before,
  &::after{
    content: '';
    position: absolute;
    left: 0;
    width: 18px;
    height: 1px;
    background-color: #333;
    transition: .3s;
    will-change: transform;
  }
  &::before{
    transform-origin: 0% 0%;
    bottom: 6px;
  }
  &::after{
    transform-origin: 0% 0%;
    top: 6px;
  }
}

.open{
  background-color: transparent;
  &::before{transform: rotate(45deg);}
  &::after{transform: rotate(-45deg);}
}
</style>