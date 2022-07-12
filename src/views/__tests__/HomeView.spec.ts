import { describe, it, expect } from "vitest";

import { flushPromises, mount, RouterLinkStub } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import TvShowsSlider from "@/components/content/TvShowsSlider.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import { mockServer, restErrorHandlers } from "@/test.setup";

const homeViewMount = () => {
  return mount(HomeView, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
};

describe("HomeView", () => {
  it("renders properly", async () => {
    const wrapper = homeViewMount();
    await flushPromises();
    const showsSlider = wrapper.findAllComponents(TvShowsSlider);
    expect(showsSlider.length).toBe(7);
  });

  it("should show a loader while request is pending", () => {
    const wrapper = homeViewMount();
    const loadingSpinner = wrapper.findComponent(LoadingSpinner);
    expect(loadingSpinner.exists()).toBe(true);
  });

  it("should show error text if request fails", async () => {
    mockServer.use(...restErrorHandlers);
    const wrapper = homeViewMount();
    await flushPromises();
    console.log(wrapper.text());
    expect(wrapper.text()).contains("Error happended");
  });
});
