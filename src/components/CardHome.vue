<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    podcast: {
        type: Object,
    },
});


</script>
<template>
    <div class="cardPostcast">
        <figure>
            <img :src="podcast.image" :alt="podcast.name" />
        </figure>
        <div class="cardText">
            <RouterLink :to="{ name: `podcast`, params: { id: podcast.id } }">
                <h2>{{ podcast.name }}</h2>
                <p>{{ podcast.artist }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("../assets/scss/global.scss");

.cardPostcast {
    position: relative;
    margin: 0 auto 45px 0;
    padding-bottom: 12px;
    width: 100%;
    min-width: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #999999;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
        box-shadow: 4px 4px 8px rgba(128, 128, 128, 0.5);
    }

    &:hover img {
        transform: scale(1.2) rotate(360deg);
    }

    figure {
        width: 70px;
        height: 70px;
        margin: 0 auto;
        position: absolute;
        top: -35px;

        img {
            width: 100%;
            border-radius: 50%;
            transition: all 0.5s;
        }
    }

    .cardText {
        margin-top: 45px;

        h2 {
            font-size: 1rem;
            text-align: center;
        }

        p {
            text-align: center;
        }
    }
}
</style>
