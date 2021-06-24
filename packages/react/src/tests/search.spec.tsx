import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("search for the weather", () => {
  it("search for default location on page load", async () => {
    const { getByText } = render(<App />);

    const loader = getByText(/loading/i);
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();
    expect(screen.getByText(/london/i)).toBeInTheDocument();
  });
  /*
  it("should not call search func when input is empty", () => {
    const { getByTestId } = render(
      <SearchControls
        search={mockedSearchFunc}
        searchByLocation={mockedSearchByLocationFunc}
      />
    );

    userEvent.click(getByTestId("search-btn"));
    expect(mockedSearchFunc).toBeCalledTimes(0);
  });

  it("should call search func when input is not empty", () => {
    const { getByTestId, getByLabelText } = render(
      <SearchControls
        search={mockedSearchFunc}
        searchByLocation={mockedSearchByLocationFunc}
      />
    );

    const searchInput = getByLabelText("Search");

    //search by clicking button
    userEvent.type(searchInput, "London");
    userEvent.click(getByTestId("search-btn"));
    expect(mockedSearchFunc).toHaveBeenCalledTimes(1);
    expect(mockedSearchFunc).toHaveBeenCalledWith("London");

    expect(screen.getByText(/london/i)).toBeInTheDocument();

    userEvent.clear(searchInput);

    //search by hitting enter
    userEvent.type(searchInput, "Tokio");
    userEvent.type(searchInput, "{enter}");
    expect(mockedSearchFunc).toHaveBeenCalledTimes(2);
    expect(mockedSearchFunc).toHaveBeenCalledWith("Tokio");
  });
  */
});
