import responseHandler from "../handlers/response.handler";
import tmdb_api from "../tmdb/tmdb.api";
import userModel from "../models/user.model";
import tokenMiddlewhere from "../middlewares/token.middleware";

const mediaList = async (req, res) => {
    try {
        const { mediaType, mediaCategory, page } = req.query;
        const data = await tmdb_api.mediaList({ mediaType, mediaCategory, page });
        responseHandler.ok(res, data);
    } catch {
        responseHandler.error(res);
    }
}

const mediaDetails = async (req, res) => {
    try {
        const { mediaType, mediaId } = req.params;
        const params = { mediaType, mediaId };
        const media = await tmdb_api.mediaDetails(params);
        media.credits = await tmdb_api.mediaCredits(params);
        const videos = await tmdb_api.mediaVideos(params);
        media.videos = videos;
        const recommendations = await tmdb_api.mediaRecommendations(params);
        media.recommendations = recommendations;
        const reviews = await tmdb_api.mediaReviews(params);
        media.reviews = reviews;
        media.images = await tmdb_api.mediaImages(params);
        const tokenDecoded = await tokenMiddlewhere.tokenDecoder(req);
        if (tokenDecoded) {
            const user = await userModel.findById(tokenDecoded.data);
            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId: mediaId });
                media.isFavorite = isFavorite !== null;
            }
            else{
                
            }
        }
        responseHandler.ok(res, media);
    } catch {
        responseHandler.error(res);
    }
}

const getGenres = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const data = await tmdb_api.mediaGenres({ mediaType });
        responseHandler.ok(res, data);
    } catch {
        responseHandler.error(res);
    }
}

const searchMedia = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const { query, page } = req.query;
        const data = await tmdb_api.mediaSearch({ 
        mediaType: mediaType === "people" ? "person" : mediaType, 
        query, 
        page });
        responseHandler.ok(res, data);
    } catch {
        responseHandler.error(res);
    }
}

const mediaCredits = async (req, res) => {
    try {
        const 
    } catch {
        responseHandler.error(res);
    }
}

