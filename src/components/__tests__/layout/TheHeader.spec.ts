import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheLogo from "@/components/layout/TheLogo.vue";
import TheSearch from "@/components/layout/TheSearch.vue";

describe("TheHeader", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TheHeader);
    const logo = wrapper.findComponent(TheLogo);
    const search = wrapper.findComponent(TheSearch);
    expect(logo.exists()).toBe(true);
    expect(search.exists()).toBe(true);
  });
});
