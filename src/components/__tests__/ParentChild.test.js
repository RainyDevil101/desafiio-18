import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Parent from '@/components/ParentComponent.vue';
import Child from '@/components/ChildComponent.vue';

describe('ParentChild Communication', () => {
  it('should render Parent and Child components', () => {
    const wrapper = mount(Parent);
    expect(wrapper.findComponent(Parent).exists()).toBe(true);
    expect(wrapper.findComponent(Child).exists()).toBe(true);
  });

  it('should update parent text when child sends text', async () => {
    const wrapper = mount(Parent);
    const childWrapper = wrapper.findComponent(Child);

    const input = childWrapper.find('input');
    await input.setValue('Hello World');

    const button = childWrapper.find('button');
    await button.trigger('click');

    expect(wrapper.text()).toContain('Received text: Hello World');
  });
});
