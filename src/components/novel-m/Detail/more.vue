<template>
  <section class="novel-mobile-detail-more">
    <div class="detail-describe">
      <span v-html="bookInfo.describe"></span>
      <div class="tag">
        <van-tag v-for="(item, k) in bookInfo.tag" :key="k"
        round color="#eee" text-color="#999" size="medium"
        style="margin-right: 8px;">
          {{item}}
        </van-tag>
      </div>
    </div>

    <van-row class="detail-chapter" justify="space-between">
      <van-col>目录</van-col>
      <van-col>
        {{formatTime(bookInfo.chapter.created_at)}} · 
        更新至{{bookInfo.chapter.num}}章
      </van-col>
    </van-row>
  </section>
</template>

<script>
import {formatTime} from '@scripts/tools'

export default {
  props: {
    bookInfo: Object
  },

  methods: {
    formatTime
  }
}
</script>

<style lang="scss">
.novel-mobile-detail-more{
  position: relative;
  z-index: 99;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;

  .detail-describe{
    margin-bottom: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;

    .describe{ font-size: 18px; }
    span{ font-weight: 100; text-align: justify; line-height: 26px; }
  }
  .detail-chapter{
    font-size: 14px;
    font-weight: 100;
    color: #666;
    line-height: 30px;
  }
}
</style>