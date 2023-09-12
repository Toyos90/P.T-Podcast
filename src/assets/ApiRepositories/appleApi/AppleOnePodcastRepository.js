import ApiAppleOnePodcastPayload from "../payloads/ApiAppleOnePodcastPayload";

export default class AppleOnePodcastRepository {
  urlToJson = "https://api.allorigins.win/raw?url=";
  url = "https://itunes.apple.com/lookup?id=";

  constructor() {}

  async getAll(id) {
    this.url = this.urlToJson + this.url + id;
    const response = await fetch(this.url);
    const json = await response.json();

    console.log(json);
    return json;
  }
}
