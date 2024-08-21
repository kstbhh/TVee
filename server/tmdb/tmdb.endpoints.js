const { default: tmdbConfig } = require("./tmdb.config")


const tmdbEndpoints = {
    MediaList: ({ mediaType, mediaCategory, page}) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaCategory}`, {page})
    },
    MediaDetails: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}`, {})
    },
    MediaCredits: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}/credits`, {})
    },
    MediaReviews: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}/reviews`, {})
    },
    MediaRecommendations: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}/recommendations`, {})
    },
    MediaVideos: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}/videos`, {})
    },
    MediaImages: ({ mediaType, mediaId }) => {
        tmdbConfig.getUrl(`/${mediaType}/${mediaId}/images`, {})
    },
    MediaSearch: ({ mediaType, query, page }) => {
        tmdbConfig.getUrl(`/${mediaType}/search`, {query, page})
    },
    MediaGenres: ({ mediaType }) => {
        tmdbConfig.getUrl(`/${mediaType}/genres`, {})
    },
    personDetails: ({ personId }) => {
        tmdbConfig.getUrl(`/person/${personId}`, {})
    },
    personMedias: ({ personId }) => {
        tmdbConfig.getUrl(`/person/${personId}/combined_credits`, {})
    }
}

export default tmdbEndpoints;