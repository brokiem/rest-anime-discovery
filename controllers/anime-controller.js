'use strict';

import {getInfoFromName, getRecommendationsList} from 'mal-scraper';

export const getAnimeDetails = async (req, res) => {
    const { title } = req.params;

    if (title.split('&&').length > 5) {
        return res.status(400).json({success: false, error: 'You can only search for 5 anime at a time.'});
    }

    if (title.split('&&').length > 1) {
        const titles = title.split('&&');

        let promises = [];

        for (let i = 0; i < titles.length; i++) {
            promises.push(getInfoFromName(titles[i]));
        }

        Promise.all(promises).then((values) => {
            res.status(200).json({"success": true, "message": values});
        });
    } else {
        getInfoFromName(req.params.title)
            .then((data) => {
                res.status(200).json({"success": true, "message": data});
            })
            .catch((err) => {
                res.status(500).json({"success": false, "error": err.toString})
            });
    }
}

export const getAnimeRecommendations = async (req, res) => {
    getRecommendationsList('anything')
        .then((data) => {
            res.status(200).json({"success": true, "message": data});
        })
        .catch((err) => {
            res.status(500).json({"success": false, "error": err.toString})
        });
}

export const getAnimeRecommendationsByName = async (req, res) => {
    const name = req.params.name;

    getRecommendationsList(name)
        .then((data) => {
            res.status(200).json({"success": true, "message": data});
        })
        .catch((err) => {
            res.status(500).json({"success": false, "error": err.toString})
        });
}