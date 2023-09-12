// AppleAllPostcastRepository.js
import axios from 'axios';
import ApiApplePodcastPayload from "../payloads/ApiApplePodcastPayload";

export default class AppleAllPostcastRepository {
  url = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  constructor() {}

  async getAll() {
    const response = await axios.get(this.url);
    const json = response.data;

    let podcasts = [];

    for (const podcast of json.feed.entry) {
      const podcastToAdd = new ApiApplePodcastPayload(
        podcast["im:name"].label,
        podcast["im:artist"].label,
        podcast["im:image"][2].label,
        podcast.id.attributes["im:id"]
      );
      podcasts.push(podcastToAdd);
    }
    return podcasts;
  }
}

