<template>
  <div class="w-full">
    <div class="flex items-center relative">
      <img src="../public/Search.svg" alt="" class="absolute left-5 w-8 h-8" />
      <input
        class="w-full py-5 px-14 rounded-3xl bg-[#132118] border-2 border-[#09170E] text-white font-medium lg:text-sm text-2xl cursor-pointer"
        v-model="inputValue"
        @input="emitValue"
        placeholder="SEARCH YOUR GAME BY NAME OR PROVIDER"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    emitValue() {
      this.$emit('input-change', this.inputValue);
    },
  },
};
</script>
