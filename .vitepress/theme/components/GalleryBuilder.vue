<script setup>
const images = Object.values(import.meta.glob("/public/gallery/*.svg", { eager: true, as: "url" }));

function getImageAltText(image) {
	return image.replace(/^\/public\/gallery\//, "").replace(/\.svg.*$/, "");
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
	width: calc(33.33% - 20px);
	margin: 10px;
	box-sizing: border-box;
}

@media (max-width: 768px) {
	#gallery-content img {
		width: calc(50% - 20px);
	}
}

@media (max-width: 480px) {
	#gallery-content img {
		width: 100%;
	}
}
</style>
