import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import debounce from "@/helper/debounce";

const mock = vi.fn();
const executeAfterThreeHundredMiliSeconds = debounce(() => mock(), 300);
describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should execute the function passed as parameter", () => {
    executeAfterThreeHundredMiliSeconds();
    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should not execute the function before the timeout has been reached", () => {
    executeAfterThreeHundredMiliSeconds();
    vi.advanceTimersByTime(2);
    expect(mock).toHaveBeenCalledTimes(0);
  });

  it("should only execute once when called multiple times within timeout", async () => {
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should execure multiple times if called after waiting for the timeout to finish", async () => {
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    vi.advanceTimersByTime(500);
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    executeAfterThreeHundredMiliSeconds();
    vi.advanceTimersByTime(500);
    expect(mock).toHaveBeenCalledTimes(2);
  });
});
