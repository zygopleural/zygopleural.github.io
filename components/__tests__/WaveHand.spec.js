import { mount } from '@vue/test-utils'
import WaveHand from '@/components/WaveHand'

describe('WaveHand', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WaveHand)
    expect(wrapper.vm).toBeTruthy()
  })
})
