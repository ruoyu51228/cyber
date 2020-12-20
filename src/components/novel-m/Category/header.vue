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

    <div :class="{'menu-mask':true,          'diy-active': state.menuShow}"></div>
    <div :class="{'menu-operation-box':true, 'diy-active': state.menuShow}">
      <div class="menu-operation">
        <van-row justify="space-around">
          <van-col @click.stop="$router.push({path: '/'})">
            <div class="menu-item homepage"
            :style="{backgroundImage: `url(${require('@assets/img/main-spirit.png')})`}"></div>
            <div class="menu-item-title">首页</div>
          </van-col>
          <van-col  @click.stop="$router.push({path: '/classify'})">
            <div class="menu-item classify"
            :style="{backgroundImage: `url(${require('@assets/img/main-spirit.png')})`}"></div>
            <div class="menu-item-title">分类</div>
          </van-col>
          <van-col>
            <div class="menu-item finish"
            :style="{backgroundImage: `url(${require('@assets/img/main-spirit.png')})`}"></div>
            <div class="menu-item-title">完本</div>
          </van-col>
        </van-row>
        <div class="menu-btn">
          我的书架
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onActivated, reactive } from 'vue'
import { goBack } from '@scripts/tools'

export default {
  setup() {
    const state = reactive({
      menuShow: false,
      search: ''
    })

    onActivated(() => {
      state.menuShow = false
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
.menu-mask{
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 46px;
  right: 0;
  bottom: 0;
  z-index: 9998;
  transition: .3s;
  background-color: rgba(0,0,0,.5);
}
.menu-operation-box{
  visibility: hidden;
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  height: 180px;
  overflow: hidden;

  .menu-operation{
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px 8px 16px;
    width: 100%;
    z-index: 9999;
    transform: translateY(-150px);
    transition: .3s;
    box-sizing: border-box;
    background-color: #fff;

    .menu-item{
      width: 30px;
      height: 30px;
      background: #fefefe no-repeat center/cover;
      background-size: 90px auto;

      &-title{
        font-size: 14px;
        text-align: center;
      }
    }
    .homepage{ background-position: -30px 0px; }
    .classify{ background-position: -60px -28px; }
    .finish{ background-position: 0px -60px; }

    .menu-btn{
      margin: 16px auto 0;
      width: 80%;
      height: 40px;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      background-color: var(--main-color);
    }
  }
}
.diy-active{
  visibility: visible;
  opacity: 1;
  .menu-operation{
    transform: translateY(0);
  }
}
</style>