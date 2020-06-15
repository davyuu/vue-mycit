<template>
  <div class="home">
    <Header/>
    <Section/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section
  }
}
</script>

<style lang='sass'>
@import '@/styles'
</style>
