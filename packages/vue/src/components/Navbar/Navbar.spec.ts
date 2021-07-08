import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/vue";
import App from "@/App.vue";
import Daily from "@/views/Daily.vue";
import Home from "@/views/Home.vue";
import store from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/daily", component: Daily },
  ],
});

test("full app rendering/navigating", async () => {
  // Notice how we pass a `routes` object to our render function.
  render(App, { global: { plugins: [router, store] } });
  await router.isReady();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i), {
    timeout: 7000,
  });

  //render home view
  expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();

  await fireEvent.click(screen.getByRole("link", { name: /daily/i }));

  //render daily view
  expect(screen.getByText(/weekly chart/i)).toBeInTheDocument();
});
