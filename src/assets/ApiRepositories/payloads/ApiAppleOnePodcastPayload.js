
export default class ApiAppleOnePodcastPayload {
    
    name;
    image;
    artist;
    description;
    urlListEpisodesPodcast
    id;

    constructor(name, artist, image, urlListEpisodesPodcast, id) {
        this.name = name
        this.image = image
        this.artist = artist
        this.urlListEpisodesPodcast = urlListEpisodesPodcast
        this.id = id;
    }

}
