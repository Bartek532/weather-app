import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchControls } from "./SearchControls";

const mockedSearchFunc = jest.fn((city: string) => Promise.resolve());
const mockedSearchByLocationFunc = jest.fn(() => Promise.resolve());

test("should not trigger search func when input is empty", async () => {
  const { getByRole } = render(
    <SearchControls
      search={mockedSearchFunc}
      searchByLocation={mockedSearchByLocationFunc}
    />
  );

  userEvent.click(getByRole("button", { name: /defaultSearch/i }));
  expect(mockedSearchFunc).not.toBeCalled();
});

test("should trigger search func when input is not empty", () => {
  const { getByRole, getByLabelText } = render(
    <SearchControls
      search={mockedSearchFunc}
      searchByLocation={mockedSearchByLocationFunc}
    />
  );

  const searchInput = getByLabelText(/search/i);

  //by pressing button
  userEvent.type(searchInput, "Tokyo");
  userEvent.click(getByRole("button", { name: /defaultSearch/i }));
  expect(mockedSearchFunc).toBeCalled();
  expect(mockedSearchFunc).toBeCalledWith("Tokyo");

  userEvent.clear(searchInput);

  //by hitting enter
  userEvent.type(searchInput, "Moscow{enter}");
  expect(mockedSearchFunc).toBeCalled();
  expect(mockedSearchFunc).toBeCalledWith("Moscow");
});

test("should trigger search by location func when location button is pressed", () => {
  const { getByRole } = render(
    <SearchControls
      search={mockedSearchFunc}
      searchByLocation={mockedSearchByLocationFunc}
    />
  );

  userEvent.click(getByRole("button", { name: /locationSearch/i }));
  expect(mockedSearchByLocationFunc).toBeCalled();
});
