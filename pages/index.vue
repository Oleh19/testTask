<template>
  <div class="min-h-screen bg-bg-color">
    <main
      class="w-full md:p-2 2xl:p-4 4xl:p-10 p-[60px] flex items-center justify-center flex-col "
    >
      <TheSearch class="w-[95%] 2xl:mb-5 mb-10" @input-change="updateSearchValue" />
      <TheGameList :searchValue="searchValue" />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    updateSearchValue(value: string) {
      this.searchValue = value;
    },
  },
};
</script>
