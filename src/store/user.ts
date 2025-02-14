import { defineStore } from "pinia";
import { ref } from "vue";

import type { UserData } from "@/utils/api/types";

export const useUserStore = defineStore("user", () => {
  const username = ref("");
  const userData = ref<UserData | null>(null);
  const b15sum = ref(0);
  const b35sum = ref(0);
  const isLoading = ref(false);
  const fullscreenLoading = ref(false);
  function updateStats(newB15sum: number, newB35sum: number) {
    b15sum.value = newB15sum;
    b35sum.value = newB35sum;
  }

  return {
    username,
    userData,
    fullscreenLoading,
    b15sum,
    b35sum,
    isLoading,
    updateStats,
  };
});
