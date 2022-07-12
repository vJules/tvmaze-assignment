import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import TvShowsSlider from "@/components/content/TvShowsSlider.vue";
import TvShow from "@/components/content/TvShow.vue";
import { mockShowsList } from "@/mocks/tvShowsViewModel";

describe("TvShowSlider", () => {
  it("renders properly", () => {
    const wrapper = mount(TvShowsSlider, {
      props: {
        title: "Test list",
        shows: mockShowsList,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    const tvShow = wrapper.findAllComponents(TvShow);
    expect(tvShow.length).toBe(mockShowsList.length);
  });
});
