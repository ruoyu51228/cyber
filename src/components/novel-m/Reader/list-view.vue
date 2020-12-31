<template>
  <div ref="wrapper" @scroll="refreshView()" 
  style="width: 100%; height: 100%; overflow: auto; position: relative;">
    <div :style="{height: listTotalHeight + 'px', width: '100%'}">
    </div>
    <div ref="item-wrapper" style="position: absolute; top: 0; left:0; width: 100%">
      <div v-for="d in listViewWidthInfo"
      :key="d.index"
      :style="{height: d.height + 'px'}">
        <slot name="list" :item="d.item" :height="d.height" :offset="d.offset" :index="d.index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    itemHeightGetter: Function,
    defaultItemHeight: Number
  },
  data(){
    return {
      listView: [],
      listTotalHeight: 0,
      itemOffsetCache: [],
      topItemIndex: 0
    }
  },
  computed: {
    listViewWidthInfo(){
      return this.listView.map((item, viewIndex) => {
        const index = this.topItemIndex + viewIndex
        const {height, offset} = this.getItemInfo(index)
        return {
          index, item, height, offset
        }
      })
    }
  },
  watch: {
    list(){
      this.refreshView()
    }
  },
  methods:{
    refreshView(config){
      if(config) {
        if(config.resize){
          this._viewHeight = this.$refs.wrapper.clientHeight
        }
        if(config.clearCache){
          this.itemOffsetCache = [];
        }
      }
      const scrollTop = this.$refs.wrapper.scrollTop;
      const viewHeight = this._viewHeight
      const topItemIndex = this.findItemIndexByOffset(scrollTop)
      const bottomItemIndex = this.findItemIndexByOffset(scrollTop + viewHeight)
      this.topItemIndex = topItemIndex
      this.listView = this.list.slice(topItemIndex, bottomItemIndex + 1)

      const listTotalHeight = this.defaultItemHeight
          ? this.getItemInfo(this.itemOffsetCache.length-1).offset + (this.list.length - this.itemOffsetCache.length) * this.defaultItemHeight
          : this.getItemInfo(this.list.length - 1).offset

      this.listTotalHeight = listTotalHeight

      this.$refs['item-wrapper'].style.transform = `translateY(${this.getItemInfo(topItemIndex - 1).offset}px)`

      this.$emit('scroll', {
        topItemIndex,
        bottomItemIndex,
        listTotalHeight,
        scrollTop
      })
    },
    findItemIndexByOffset(offset){
      if(offset >= this.getItemInfo(this.itemOffsetCache.length - 1).offset){
        for(let index = this.itemOffsetCache.length; index < this.list.length; index++){
          if(this.getItemInfo(index).offset > offset){
            return index
          }
        }
        return this.list.length - 1;
      } else {
        let begin = 0;
        let end = this.itemOffsetCache.length - 1;
        while(begin < end) {
          let mid       = (begin + end) / 2 | 0
          let midOffset = this.getItemInfo(mid).offset;
          if(midOffset === offset){
            return mid
          } else if (midOffset > offset){
            end = mid - 1
          } else {
            begin = mid + 1
          }
        }
        if(this.getItemInfo(begin).offset < offset && this.getItemInfo(begin + 1).offset > offset){
          begin = begin + 1
        }
        return begin
      }
    },
    getItemInfo(index){
      if(index < 0 || index > this.list.length - 1){
        return {
          offset: 0,
          height: 0
        }
      }
      let cache = this.itemOffsetCache[index]

      if(!cache) {
        let height = (this.itemHeightGetter ? this.itemHeightGetter(this.list[index], index) : this.defaultItemHeight)
        cache = this.itemOffsetCache[index] = {
          height,
          offset: this.getItemInfo(index - 1).offset + height
        }
      }
      return cache
    }
  },
  mounted(){
    this.refreshView({resize: true})
  }
}
</script>