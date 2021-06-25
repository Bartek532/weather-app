import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("switch between days in horuly and weekly weather", () => {
  it("should switch between today and tomorrow weather on home view", async () => {
    const { getByText, getByRole } = render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    expect(getByText(/hourly weather today/i)).toBeInTheDocument();
    userEvent.click(getByRole("button", { name: /tomorrow/i }));

    expect(getByText(/hourly weather tomorrow/i)).toBeInTheDocument();
    userEvent.click(getByRole("button", { name: /today/i }));

    expect(getByText(/hourly weather today/i)).toBeInTheDocument();
  });

  it("should switch between days in daily view", async () => {
    const { getByText, getByRole } = render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
      timeout: 7000,
    });

    userEvent.click(getByRole("link", { name: /daily/i }));
    userEvent.click(getByRole("button", { name: /tuesday/i }));

    expect(getByText(/tuesday/i)).toBeInTheDocument();
    userEvent.click(getByRole("button", { name: /saturday/i }));

    expect(getByText(/saturday/i)).toBeInTheDocument();
  });
});
