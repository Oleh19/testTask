<template>
  <div>
    <div v-if="isLoading">
      <div class="loader"></div>
    </div>

    <div
      v-else-if="filteredGames.length === 0"
      class="v text-center text-white font-medium lg:text-sm text-2xl"
    >
      Game not found
    </div>

    <div
      class="flex w-screen h-auto justify-center items-center xl:gap-2 gap-4 flex-wrap"
      v-else
    >
      <div v-for="game in filteredGames" :key="game.id">
        <TheGameCard :game="game" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IGame } from '~/types/Games';

const props = defineProps({
  searchValue: String,
});

const gamesData = ref<{
  games: IGame[];
} | null>(null);

const fetchData = async () => {
  try {
    const response = await $fetch('/api/games/allGames');
    gamesData.value = response;
  } catch (error) {
    console.error('Помилка завантаження даних', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const isLoading = ref(true);

const filteredGames = computed(() => {
  if (!gamesData.value || !gamesData.value.games) {
    return [];
  }
  if (!props.searchValue || props.searchValue.trim() === '') {
    return gamesData.value.games;
  } else {
    const searchValueLowerCase = props.searchValue.toLowerCase();
    return gamesData.value.games.filter(
      (game) =>
        game.title.toLowerCase().includes(searchValueLowerCase) ||
        game.provider.toLowerCase().includes(searchValueLowerCase),
    );
  }
});
</script>

<style scoped>
.loader {
  border: 10px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 30vw;
  height: 30vw;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
