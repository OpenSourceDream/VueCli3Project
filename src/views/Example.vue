<template>
  <div class="example">
    <h1>This is an example page</h1>
    <div>{{ name }}</div>
    <div>{{ getName }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Example',
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
