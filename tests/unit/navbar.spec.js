import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders props.searchText when passed', () => {
    const searchText = 'samsung'
    const wrapper = shallowMount(NavBar, {
      propsData: { searchText }
    })
    expect(wrapper.text()).toMatch(searchText)
  })
})
