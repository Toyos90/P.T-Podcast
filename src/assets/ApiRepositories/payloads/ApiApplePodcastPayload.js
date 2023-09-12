
export default class ApiApplePodcastPayload {
    
    name;
    image;
    artist;
    id;

    constructor(name, artist, image, id) {
        this.name = name
        this.image = image
        this.artist = artist
        this.id = id;
    }

}
