import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("search for the weather by query", () => {
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

  it("not search when input is empty", async () => {
    const { getByRole, queryByText } = render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    userEvent.click(getByRole("button", { name: /defaultsearch/i }));
    const loader = queryByText(/loading/i);
    expect(loader).not.toBeInTheDocument();
  });

  it("search when input is not empty", async () => {
    const { getByRole, getByLabelText } = render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    const searchInput = getByLabelText(/search/i);

    userEvent.type(searchInput, "Tokyo");
    userEvent.click(getByRole("button", { name: /defaultsearch/i }));
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });
    expect(screen.getByText(/tokyo/i)).toBeInTheDocument();
  });
  it("renders an error message when error occurs", async () => {
    jest.mock("../utils");

    render(<App />);
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => screen.queryByText(/error/i));
  });
  /*
  it("search by location, when location button is pressed", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce(success =>
        Promise.resolve(
          success({
            coords: {
              latitude: 55.860916,
              longitude: -4.251433,
            },
          })
        )
      ),
    };
    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
    });

    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    Object.defineProperty(global.navigator, "permissions", {
      value: {
        query: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve({ state: "granted" })),
      },
    });

    userEvent.click(
      screen.getByRole("button", { name: /search by location/i })
    );

    expect(screen.queryByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });
    expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();
    expect(screen.getByText(/glasgow/i)).toBeInTheDocument();
  });
  */
});
