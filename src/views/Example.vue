<template>
  <div class="example">
    <h1>This is an example page</h1>
    <div>{{ name }}</div>
    <div>{{ getName }}</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { Button } from 'vant'

export default {
  name: 'Example',
  components: {
    [Button.name]: Button
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('example', ['name']),
    ...mapGetters('example', ['getName'])
  },
  methods: {
    ...mapActions('example', ['setName'])
  },
  mounted () {
    console.log('example2')
    this.setName('王旭')
  }
}
</script>
