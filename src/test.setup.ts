import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { mockTvShowsResponse } from "@/mocks/tvShowsResponse";

export const restHandlers = [
  rest.get("https://api.tvmaze.com/shows", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTvShowsResponse));
  }),
];

export const restErrorHandlers = [
  rest.get("https://api.tvmaze.com/shows", (req, res, ctx) => {
    return res(ctx.status(500));
  }),
];

export const mockServer = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => mockServer.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => mockServer.resetHandlers());
