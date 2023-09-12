import AppleAllPodcastRepository from "./appleApi/AppleAllPodcastRepository";
import AppleOnePodcastRepository from "./appleApi/AppleOnePodcastRepository";

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        this.chooseApi()
    }

    chooseApi() {
        if(this.api === "appleAllPodcast") return new AppleAllPodcastRepository;
        if(this.api === "appleOnePodcast") return new AppleOnePodcastRepository;
    }
}