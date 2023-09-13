import axios from 'axios';
import Parser from 'rss-parser'; 
import ApiAppleOnePodcastPayload from "../payloads/ApiAppleOnePodcastPayload";

export default class AppleOnePodcastRepository {
  urlToJson = "https://api.allorigins.win/raw?url=";
  url = "https://itunes.apple.com/lookup?id=";

  constructor() {}

  async getPodcastFeedUrl(podcastId) {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}`;
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
    const json = response.data;
    console.log('Feed URL:', json.results[0].feedUrl);
    const feedUrl = json.results[0].feedUrl;
    return feedUrl;
  }

  async getAll(id) {
    this.url = this.urlToJson + this.url + id;
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/${this.url}`);
    const json = response.data;

    console.log('Podcast data:', json); 
    return json;
  }

  async getEpisodes(id) {
    
    const feedUrl = await this.getPodcastFeedUrl(id);

    
    let parser = new Parser();
    const feed = await parser.parseURL(`https://cors-anywhere.herokuapp.com/${feedUrl}`);

    console.log('Episodes:', feed.items); 
    let episodes = [];
    for (const episode of feed.items) {
      const episodeToAdd = new ApiAppleOnePodcastPayload(
        episode.title,
        episode.itunes.author,
        episode.itunes.image,
        episode.content,
        episode.guid
      );
      episodes.push(episodeToAdd);
    }
    return episodes;
  }
}
