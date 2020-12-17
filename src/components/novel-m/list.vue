<template>
  <section class="novel-mobile-list">
    <div class="novel-mobile-list_title">狮子强推</div>
    <div class="novel-mobile-booklist">
      <div class="novel-mobile-book-item"
      v-for="(item, key) in bookList" :key="key">
        <div class="novel-mobile-book_cover"
        :style="{'background-image': `url('${item.cover}')`}"></div>
        <div class="novel-mobile-book-details">
          <h4>{{item.title}}</h4>
          <div class="introduce">
            {{item.introduce}}
          </div>
          <van-row class="tag-box" justify="space-between" align="center">
            <van-col>
              <i class="iconfont">&#xe607;</i>
              {{item.author}}
            </van-col>
            <van-col class="tag">
              <van-tag plain>{{item.tags[0]}}</van-tag>
              <van-tag plain type="danger">完结</van-tag>
              <van-tag plain type="primary">{{calcWordNumber(item.countWord)}}</van-tag>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formatTime } from '@scripts/tools'

export default {
  props: {
    bookList: Array
  },

  methods: {
    calcWordNumber( val ){
      let len = val.toString().length;
      if(len > 8) return Math.floor(val / 10000000) + '亿字'
      else if (len > 4) return Math.floor(val / 10000) + '万字'
      return val
    },
    updateDate(val){
      return formatTime(val || null) + '更新'
    }
  }
}
</script>

<style lang="scss">
.novel-mobile-list {
  margin-top: 8px;
  padding: var(--main-padding);
  padding-bottom: 8px;
  width: 100%;
  background-color: #fff;

  .novel-mobile-list_title{
    position: relative;
    padding-left: 8px;
    padding-top: 16px;
    font-size: 18px;
    font-weight: 500;

    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 16px;
      width: 2px;
      height: 24px;
      background-color: var(--main-color);
    }
  }

  .novel-mobile-booklist{
    position: relative;
    padding-bottom: 16px;

    .novel-mobile-book-item{
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #f6f7f9;

      .novel-mobile-book_cover{
        flex-shrink: 0;
        margin-right: 8px;
        width: 66px;
        height: 88px;
        background: #f6f7f9 no-repeat center/cover;
      }
      .introduce{
        display: -webkit-box;
        margin: 6px 0;
        color: #999;
        font-size: 14px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tag-box{
        font-size: 12px;
        color: #999;

        .iconfont{ font-size: 14px;}
        .tag > *{
          margin-left: 2px;
        }
      }
    }
  }
}
</style>