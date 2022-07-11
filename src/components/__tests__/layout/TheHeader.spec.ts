import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import TheLogo from "@/components/layout/TheLogo.vue";
import TheSearch from "@/components/layout/TheSearch.vue";
import TheHeader from "@/components/layout/TheHeader.vue";

describe("TheHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(TheHeader, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    const logo = wrapper.findComponent(TheLogo);
    const search = wrapper.findComponent(TheSearch);
    expect(logo.exists()).toBe(true);
    expect(search.exists()).toBe(true);
  });
});
