import { describe, it, expect } from "vitest";

import { mount, RouterLinkStub } from "@vue/test-utils";
import TvShow from "@/components/content/TvShow.vue";
import { mockShowsList } from "@/mocks/tvShows";
const mockShow = mockShowsList[0];

describe("TvShow", () => {
  it("renders properly", () => {
    const wrapper = mount(TvShow, {
      props: { show: mockShow },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).contain(mockShow.name);
  });
});
