<template>
  <div class="section">
    <ul>
      <li v-for="section in sections" :key="section.key">
        <div class="card">
          <Icon :icon="section.icon" size="large" />
          <p>{{ section.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Section',
  components: {
    Icon
  },
  data: () => {
    return {
      sections: [
        {
          key: 'message',
          name: 'Latest Message',
          icon: 'message'
        }, {
          key: 'kids',
          name: 'citKids',
          icon: 'kids'
        }, {
          key: 'prayer',
          name: 'Prayer Requests',
          icon: 'prayer'
        }, {
          key: 'giving',
          name: 'Giving',
          icon: 'giving'
        }, {
          key: 'connect',
          name: 'Connect',
          icon: 'connect'
        }, {
          key: 'groups',
          name: 'Community Groups',
          icon: 'groups'
        }, {
          key: 'alpha',
          name: 'Alpha',
          icon: 'alpha'
        }, {
          key: 'next',
          name: 'Next Steps',
          icon: 'next'
        }, {
          key: 'events',
          name: 'Upcoming Events',
          icon: 'events'
        }, {
          key: 'volunteer',
          name: 'Volunteer',
          icon: 'volunteer'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/styles"

.section
  padding: 0 d(4)

  +mq($s-small)
    padding: 0 d(10)

  +mq($s-medium)
    padding: 0 d(20)

  ul
    display: flex
    flex-wrap: wrap

    li
      width: 50%
      padding: d(2)

      +mq($s-medium)
        width: calc(100%/3)

.card
  height: 100%
  padding: d(4) d(2)
  border-radius: d(1)
  box-shadow: $shadow
  text-align: center
  +transition-fast

  &:hover
    box-shadow: $shadow-thick

  p
    margin-top: d(2)

  .icon
    fill: #5938d9

</style>
