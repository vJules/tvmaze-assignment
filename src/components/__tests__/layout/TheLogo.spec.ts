import { describe, it, expect } from "vitest";

import { mount, RouterLinkStub } from "@vue/test-utils";
import TheLogo from "@/components/layout/TheLogo.vue";
import IconLogo from "@/components/icons/IconLogo.vue";

describe("TheLogo", () => {
  it("renders properly", () => {
    const wrapper = mount(TheLogo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    const iconLogo = wrapper.findComponent(IconLogo);
    expect(iconLogo.exists()).toBe(true);
  });
});
