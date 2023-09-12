<template>
  <div v-if="podcast">
    <h1>{{ podcast['im:name'].label }}</h1>
    <img :src="podcast['im:image'][2].label" alt="Podcast image">
    <p>{{ podcast.summary.label }}</p>
    <p>{{ podcast['im:price'].label }}</p>
    <p>{{ podcast['im:contentType'].attributes.label }}</p>
    <p>{{ podcast.rights.label }}</p>
    <p>{{ podcast.title.label }}</p>
    <a :href="podcast.link.attributes.href">{{ podcast.link.attributes.href }}</a>
    <p>{{ podcast.id.label }}</p>
    <p>{{ podcast['im:artist'].label }}</p>
    <p>{{ podcast.category.attributes.label }}</p>
    <p>{{ podcast['im:releaseDate'].attributes.label }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  podcast: {
    type: Object,
    required: true
  },
});
</script>
