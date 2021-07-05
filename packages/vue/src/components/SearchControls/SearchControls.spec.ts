import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import SearchControls from "./SearchControls.vue";

const mockedSearchFunc = jest.fn(_ => Promise.resolve());
const mockedSearchByLocationFunc = jest.fn(() => Promise.resolve());

test("should not trigger search func when input is empty", async () => {
  render(SearchControls, {
    props: {
      search: mockedSearchFunc,
      searchByLocation: mockedSearchByLocationFunc,
    },
  });

  userEvent.click(screen.getByRole("button", { name: /defaultSearch/i }));
  expect(mockedSearchFunc).not.toBeCalled();
});
