<script setup>
const images = Object.values(import.meta.glob("/public/early-access/android/*.png", { eager: true, query: "?url", import: "default" }));

function getImageAltText(image) {
  return image.replace(/^\/public\/early-access\/android\//, "").replace(/\.png.*$/, "");
}
</script>

<template>
  <div class="info custom-block">
    <div id="gallery-content">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="getImageAltText(image)" />
    </div>
  </div>
</template>

<style>
#gallery-content {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

#gallery-content img {
  width: calc(50% - 40px);
  margin: 20px;
  box-sizing: border-box;
  border-radius: 8px;
}

@media (max-width: 768px) {
  #gallery-content img {
    width: calc(50% - 40px);
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  #gallery-content img {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
