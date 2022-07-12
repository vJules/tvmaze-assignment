import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheFooter from "@/components/layout/TheFooter.vue";

describe("The footer", () => {
  it("renders properly", () => {
    const wrapper = mount(TheFooter);
    expect(wrapper.text()).toContain("Footer");
  });
});
