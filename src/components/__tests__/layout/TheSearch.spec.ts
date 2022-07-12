import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/search/SearchBar.vue";
import TheSearch from "@/components/layout/TheSearch.vue";

describe("TheSearch", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TheSearch);
    const searchBar = wrapper.findComponent(SearchBar);
    expect(searchBar.exists()).toBe(true);
  });
});
