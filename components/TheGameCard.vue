<template>
  <img
    class="rounded-xl w-[286px] h-[286px] 4xl:w-[206px] 4xl:h-[194px] 3xl:w-[196px] 3xl:h-[196px] 2xl:w-[228px] 2xl:h-[272px] xl:w-[175px] xl:h-[175px] md:w-[175px] md:h-[175px] sm:w-[145px] sm:h-[145px]"
    :src="getImagePath"
    alt="Game picture"
  />
</template>

<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const getImagePath = computed(() => {
  const sanitizedTitle = props.game.id.replace(/[^a-zA-Z0-9]/g, '_');
  return `logos/${sanitizedTitle}.webp`;
});
</script>
