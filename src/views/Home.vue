<template>
  <div class='home'>

    <header>
      <img alt='Vue logo' src='@/assets/logo.png'>
      <h1>Welcome</h1>
    </header>

    <div class='section'>
      <ul>
        <li v-for='section in sections' :key='section.key'>
          <SectionCard v-bind='section'/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard.vue'

export default {
  name: 'Home',
  components: {
    SectionCard
  },
  data: () => {
    return {
      sections: [
        {
          key: 'message',
          name: 'Latest Message',
          icon: 'message',
          route: '/message'
        }, {
          key: 'kids',
          name: 'citKids',
          icon: 'kids',
          route: '/kids'
        }, {
          key: 'prayer',
          name: 'Prayer Requests',
          icon: 'prayer',
          route: '/prayer'
        }, {
          key: 'giving',
          name: 'Giving',
          icon: 'giving',
          route: '/giving'
        }, {
          key: 'connect',
          name: 'Connect',
          icon: 'connect',
          route: '/connect'
        }, {
          key: 'groups',
          name: 'Community Groups',
          icon: 'groups',
          route: '/groups'
        }, {
          key: 'alpha',
          name: 'Alpha',
          icon: 'alpha',
          route: '/alpha'
        }, {
          key: 'next',
          name: 'Next Steps',
          icon: 'next',
          route: '/next'
        }, {
          key: 'events',
          name: 'Upcoming Events',
          icon: 'events',
          route: '/events'
        }, {
          key: 'volunteer',
          name: 'Volunteer',
          icon: 'volunteer',
          route: '/volunteer'
        }
      ]
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.home
  +page-padding

header
  display: flex
  flex-direction: column
  align-items: center

  img
    height: d(8)

  h1
    margin-top: d(4)
    +title-large

.section
  margin-top: d(4)

  ul
    display: flex
    flex-wrap: wrap

    li
      width: 50%
      padding: d(2)

      +mq($s-medium)
        width: calc(100% / 3)
</style>
