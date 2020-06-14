<template>
  <div id="app">
    <Header/>
    <Section/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'

export default {
  name: 'App',
  components: {
    Header,
    Section
  }
}
</script>

<style lang="sass">
@import "@/styles"
</style>
