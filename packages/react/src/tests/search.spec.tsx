import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
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

  it("not search when input is empty", async () => {
    const { getByTestId, queryByText } = render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    userEvent.click(getByTestId("search-btn"));
    const loader = queryByText(/loading/i);
    expect(loader).not.toBeInTheDocument();
  });

  it("search when input is not empty", async () => {
    const { getByTestId, getByLabelText } = render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    const searchInput = getByLabelText(/search/i);

    userEvent.type(searchInput, "Tokyo");
    userEvent.click(getByTestId("search-btn"));
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
});
