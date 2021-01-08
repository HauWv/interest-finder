import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/home.vue'

describe('home.vue', () => {
  it('renders h1 tag', () => {
    const wrapper = shallowMount(Home, {
      computed: {
        response() {
          return 1
        }
      }
    })
    expect(wrapper.find('h1').text()).equal('Find Hidden Interests')
  })
})
