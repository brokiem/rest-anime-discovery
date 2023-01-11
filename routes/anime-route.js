import express from "express";
import {getAnimeDetails} from "../controllers/anime-controller.js";

const router = express.Router();

router.get('/details/:title', getAnimeDetails);

export default router;