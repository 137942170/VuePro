<template>
  <div>
    <h2 v-text="contentList.title"></h2>
    <p>作者：{{contentList.author.loginname}} 发表于：{{$utils.goodTime(contentList.create_at)}}</p><hr>
    <article v-html="contentList.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="(item,index) in contentList.replies" v-bind:key="index">
        <p>评论者：{{item.author.loginname}} 评论于：{{$utils.goodTime(item.create_at)}}</p>
        <article v-html="item.content"></article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContentList',
  data () {
    return {
      id: this.$route.params.id,
      contentList: {}
    }
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, res => {
        this.contentList = res.data
      })
    }
  },
  created () {
    this.getData()
  }
}

</script>
