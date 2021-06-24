import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../App";

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), {
    timeout: 7000,
  });

  //render home view
  expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("daily-link"));

  //render daily view
  expect(screen.getByText(/weekly chart/i)).toBeInTheDocument();
});
