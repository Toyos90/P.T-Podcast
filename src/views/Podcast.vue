<script setup>
import { ref, onBeforeMount } from "vue";

import ApiRepository from '../assets/ApiRepositories/ApiRepository'

import HeadOne from "../components/HeadOne.vue";
import ItemListEpisodesPodcast from "../components/ItemListEpidodesPodcast.vue"

const props = defineProps({
  id: {
    type: String,
  },
});

const repository = new ApiRepository("appleOnePodcast");
const api = repository.chooseApi();

let podcast = ref([]);
onBeforeMount(async () => {
  podcast.value = await api.getAll(788236947);
})

</script>

<template>
  <main>
    <HeadOne></HeadOne>
    <div class="podcast">
      <div class="aboutPodcast">
        <figure>
          <img src="" alt="" />
        </figure>
        <div class="infoPodcast">
          <h2>{{ podcast.results[0].collectionName }}</h2>
          <p class="author">{{ podcast.results[0].artistName }}</p>
          <p><strong>Description</strong></p>
          <p class="description">{{ podcast.results[0].trackViewUrl }}</p>
        </div>
      </div>
      <div class="epidodesPodcast">
        <p class="totalEpisodesPodcast">Episodios:</p>
        <div class="listEpidodesPodcast">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th nowrap>Date</th>
                <th nowrap>Duration</th>
              </tr>
            </thead>
            <tbody>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
              <ItemListEpisodesPodcast></ItemListEpisodesPodcast>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

main {
  font-family: Inter;
  .podcast {
    display: grid;
    grid-template-columns: 2fr 8fr;
    gap: 20px;

    .aboutPodcast {
      width: 100%;
      min-width: 190px;
      padding: 15px;
      border: 1px solid $GrayMid;
      border-radius: 5px;
      figure {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        padding-bottom: 10px;
        border-bottom: 1px solid $GrayMid;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 20px;
      }
      .infoPodcast {
        .author {
          font-style: oblique;
          padding-bottom: 10px;
          border-bottom: 1px solid $GrayMid;
          margin-bottom: 10px;
        }
      }
    }

    .epidodesPodcast {
      .totalEpisodesPodcast {
        border: 1px solid $GrayMid;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px 15px;
        margin-bottom: 15px;
        font-size: 20px;
      }
      .listEpidodesPodcast {
        border: 1px solid $GrayMid;
        border-radius: 5px;
        padding: 15px;
        table {
          width: 100%;
          border-collapse: collapse;
          thead {
            th {
              padding: 10px;
              text-align: left;
              &:first-child {
                width: 100%;
              }
            }
          }
          tbody {
            tr {
              cursor: pointer;
              border-bottom: 1px solid $GrayMid;
              transition: all 0.3s;
              &:nth-child(odd) {
                background: $GrayMidLight;
              }
              &:hover {
                background: $GrayDark;
                color: $White;
              }
            }
          }
        }
      }
    }
  }
}
</style>
