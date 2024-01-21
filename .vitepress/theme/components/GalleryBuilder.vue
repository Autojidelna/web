<script setup>
const images = Object.values(import.meta.glob("/public/gallery/*.png", { eager: true, as: "url" }));
console.log(images);
</script>

<template>
	<div>
		<img v-for="(image, index) in images" :key="index" :src="image" height="500px" width="500px" alt="Gallery Image" />
	</div>
</template>
