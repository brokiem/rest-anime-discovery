import express from "express";
import {
    getAnimeDetails,
    getAnimeRecommendations,
    getAnimeRecommendationsByName
} from "../controllers/anime-controller.js";

const router = express.Router();

router.get('/details/:title', getAnimeDetails);
router.get('/recommendations', getAnimeRecommendations);
router.get('/recommendations/:name', getAnimeRecommendationsByName);

export default router;