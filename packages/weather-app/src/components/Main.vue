<template>
  <div v-if="$store.state.loading">
    <Loader />
  </div>
  <div v-else>
    <Search @search="defaultSearch" />
    <router-view></router-view>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Loader from "@/components/Loader.vue";
import Search from "@/components/SearchControls.vue";

import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Navbar,
    Loader,
    Search
  },
  setup() {
    const store = useStore();
    async function defaultSearch(query: string) {
      store.dispatch("setLoading", true);
      try {
        await store.dispatch("getCurrentWeather", query);

        const { coord } = store.state.currentWeather;
        await store.dispatch("getDailyWeather", {
          lat: coord.lat,
          lon: coord.lon
        });
        await store.dispatch("getTimezone", { lat: coord.lat, lon: coord.lon });

        store.dispatch("setError", false);
      } catch {
        store.dispatch("setError", true);
      } finally {
        store.dispatch("setLoading", false);
      }
    }

    defaultSearch("London");

    return { defaultSearch };
  }
});
</script>
