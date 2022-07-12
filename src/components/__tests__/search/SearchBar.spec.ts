import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import SearchBar from "@/components/search/SearchBar.vue";
import { createRouter, createWebHistory, type Router } from "vue-router";

import { routes } from "@/router";
import type { SearchResult } from "@/models/Search/SearchResult";

const mockSearchResults = [
  { title: "Breaking Bad", link: "/show/1" },
  { name: "Black Mirror", link: "/show/2" },
  { name: "IT Crowd", link: "/show/3" },
] as SearchResult[];

let router: Router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  router.push("/");
  await router.isReady();
});

const mountSearchBar = (
  routerPlugin: Router,
  searchResults?: SearchResult[]
) => {
  return mount(SearchBar, {
    props: {
      searchResults: searchResults ?? mockSearchResults,
    },
    global: {
      plugins: [routerPlugin],
    },
  });
};

describe("SearchBar", () => {
  it("renders properly", () => {
    const wrapper = mountSearchBar(router);
    const input = wrapper.find("[data-test-id=search-bar-input]");
    expect(input.exists()).toBe(true);
  });

  it("should show a result list when searchResults with items is provided", () => {
    const wrapper = mountSearchBar(router);
    const results = wrapper.find("[data-test-id=search-bar-results]");
    expect(results.exists()).toBe(true);
    const resultItems = wrapper.findAll(
      "[data-test-id=search-bar-result-item]"
    );
    expect(resultItems.length).toBe(mockSearchResults.length);
  });

  it("should not show a result list when searchResults is empty", () => {
    const wrapper = mountSearchBar(router, []);
    const results = wrapper.find("[data-test-id=search-bar-results]");
    expect(results.exists()).toBe(true);
    const resultItems = wrapper.findAll(
      "[data-test-id=search-bar-result-item]"
    );
    expect(resultItems.length).toBe(0);
  });

  it("should emit an input event when typing in input element", async () => {
    const wrapper = mountSearchBar(router);
    const input = wrapper.find("[data-test-id=search-bar-input]");

    await input.setValue("test");
    expect(wrapper.emitted("input")).toHaveLength(1);
    await input.setValue("another test");

    const events = wrapper.emitted("input");
    expect(events).toHaveLength(2);
  });
});
