import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UnderConstruction from '../UnderConstruction.vue'

describe('Under Construction', () => {
    it('renders properly', () => {
        const wrapper = mount(UnderConstruction);
        expect(wrapper.text()).toContain('Under Construction');
    })
})