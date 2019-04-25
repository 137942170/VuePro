<template>
  <div id = "content">
      <h1>this is Content</h1>
      <ul>
        <li v-for="(item, index) in list" v-bind:key = "index">
          <time v-text="item.create_at"></time>
          <router-link :to="'/ContentList/' + item.id">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getData () {
      let that = this
      this.$api.get('topics', null, res => {
        that.list = res.data
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>
  #content ul {
    list-style: none;
  }
</style>
