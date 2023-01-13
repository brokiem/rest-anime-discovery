'use strict';

import * as mal from 'mal-scraper';

export const getAnimeDetails = async (req, res) => {
    mal.getInfoFromName(req.params.title)
        .then((data) => {
            res.status(200).json({"success": true, "message": data});
        })
        .catch((err) => {
            res.status(500).json({"success": false, "error": err.toString})
        });
}

export const getAnimeRecommendations = async (req, res) => {
    mal.getRecommendationsList('anything')
        .then((data) => {
            res.status(200).json({"success": true, "message": data});
        })
        .catch((err) => {
            res.status(500).json({"success": false, "error": err.toString})
        });
}

export const getAnimeRecommendationsByName = async (req, res) => {
    const name = req.params.name;

    mal.getRecommendationsList(name)
        .then((data) => {
            res.status(200).json({"success": true, "message": data});
        })
        .catch((err) => {
            res.status(500).json({"success": false, "error": err.toString})
        });
}