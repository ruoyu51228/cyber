<template>
  <section class="novel-mobile-book-detail">
    <!-- detail header -->
    <van-nav-bar
    left-arrow
    :right-text="bookInfo.add ? '已加入书架' : '加入书架'"
    @click-left="goBack"
    @click-right="addBook"></van-nav-bar>

    <!-- detail info -->
    <div class="detail-background"
    :style="{backgroundImage: `url(${bookInfo.image})`}"></div>
    <van-row justify="space-between">
      <van-col class="detail-info">
        <h3>{{bookInfo.title}}</h3>
        <div>{{bookInfo.author}}</div>
        <div>
          <span v-for="(item, k) in bookInfo.tag" :key="k">
            {{item}} <span v-if="k < bookInfo.tag.length - 1">/ </span>
          </span>
        </div>
        <div>
          {{bookInfo.status ? '完本' : '连载中'}} | 
          {{calcWordNumber(bookInfo.wordNumber)}}
        </div>
      </van-col>
      <van-col>
        <van-image
        width="95"
        height="130"
        :src="bookInfo.image" />
      </van-col>
    </van-row>
  </section>
</template>

<script>
import { calcWordNumber, goBack } from '@scripts/tools'

export default {
  props: {
    bookInfo: Object
  },

  methods: {
    goBack,
    calcWordNumber,
    addBook(){
      if(this.bookInfo.add) return 
      this.$toast.success('添加成功！');
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  padding: 0;
  background-color: transparent;
  &::after{
    border-bottom-width: 0 !important;
  }

  .van-icon,
  .van-nav-bar__left,
  .van-nav-bar__right,
  .van-nav-bar__text{
    padding: 0;
    color: #333;
  }
}

.novel-mobile-book-detail{
  position: relative;
  padding: 0 16px 16px;

  .detail-background{
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    filter: blur(80px) saturate(180%);
    background: #fff no-repeat center/cover;
  }
  .detail-info{
    h3{
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 26px;
    }
    div{
      color: #666;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>