import { describe, expect, it } from 'vitest';
import router from '@/router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import { mount } from '@vue/test-utils';

describe('Router navigation', () => {
  it('should render HomeView component for / route', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render AboutView component for /about route', async () => {
    router.push('/about');
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
