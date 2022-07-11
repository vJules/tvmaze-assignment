import { describe, it, expect } from "vitest";

import { mount, RouterLinkStub } from "@vue/test-utils";
import TheLogo from "@/components/layout/TheLogo.vue";

describe("TheLogo", () => {
  it("renders properly", () => {
    const wrapper = mount(TheLogo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.findComponent("IconLogo")).toBeDefined;
  });
});
