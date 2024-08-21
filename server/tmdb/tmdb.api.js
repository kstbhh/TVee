import axiosClient from "../axios/axios.client";
import tmdbEndpoints from "./tmdb.endpoints";

const tmdb_api = {
    mediaList: async ({ mediaType, mediaCategory, page }) => {
        const url = tmdbEndpoints.MediaList({ mediaType, mediaCategory, page });
        return await axiosClient.get(url);
    },
    mediaDetails: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaDetails({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaCredits: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaCredits({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaReviews: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaReviews({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaRecommendations: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaRecommendations({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaVideos: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaVideos({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaImages: async ({ mediaType, mediaId }) => {
        const url = tmdbEndpoints.MediaImages({ mediaType, mediaId });
        return await axiosClient.get(url);
    },
    mediaSearch: async ({ mediaType, query, page }) => {
        const url = tmdbEndpoints.MediaSearch({ mediaType, query, page });
        return await axiosClient.get(url);
    },
    mediaGenres: async ({ mediaType }) => {
        const url = tmdbEndpoints.MediaGenres({ mediaType });
        return await axiosClient.get(url);
    },
    personDetails: async ({ personId }) => {
        const url = tmdbEndpoints.personDetails({ personId });
        return await axiosClient.get(url);
    },
    personMedias: async ({ personId }) => {
        const url = tmdbEndpoints.personMedias({ personId });
        return await axiosClient.get(url);
    }
}

export default tmdb_api;