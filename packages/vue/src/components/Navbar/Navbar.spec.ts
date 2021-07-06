import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import App from "@/App.vue";
import Daily from "@/views/Daily.vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/daily", component: Daily },
  { path: "*", redirect: "/" },
];
test("full app rendering/navigating", async () => {
  // Notice how we pass a `routes` object to our render function.
  render(App, { routes });

  //render home view
  expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("link", { name: /daily/i }));

  //render daily view
  expect(screen.getByText(/weekly chart/i)).toBeInTheDocument();
});
