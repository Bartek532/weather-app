import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import SearchControls from "./SearchControls.vue";

test("should emit empty string when input is empty", async () => {
  const wrapper = render(SearchControls);

  userEvent.click(screen.getByRole("button", { name: /search search/i }));
  expect(wrapper.emitted().search[0]).toEqual([""]);
});

test("should emit input value when input is not empty", () => {
  const wrapper = render(SearchControls);

  const searchInput = screen.getByLabelText(/search/i);

  //by pressing button
  userEvent.type(searchInput, "Tokyo");
  userEvent.click(screen.getByRole("button", { name: /search search/i }));
  expect(wrapper.emitted().search).toBeTruthy();
  expect(wrapper.emitted().search[0]).toEqual(["Tokyo"]);

  userEvent.clear(searchInput);

  //by hitting enter
  userEvent.type(searchInput, "Moscow{enter}");
  expect(wrapper.emitted().search).toBeTruthy();
  expect(wrapper.emitted().search[1]).toEqual(["Moscow"]);
});

test("should emit to search by location when location button is pressed", () => {
  const wrapper = render(SearchControls);

  userEvent.click(screen.getByRole("button", { name: /location-search/i }));
  expect(wrapper.emitted()["search-by-location"]).toBeTruthy();
});
