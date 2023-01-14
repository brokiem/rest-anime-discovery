'use strict';

import * as mal from 'mal-scraper';

export const getAnimeDetails = async (req, res) => {
    const { title } = req.params;

    if (title.split('&&').length > 10) {
        return res.status(400).json({success: false, error: 'You can only search for 10 anime at a time.'});
    }

    if (title.split('&&').length > 1) {
        const titles = title.split('&&');

        let promises = [];

        for (let i = 0; i < titles.length; i++) {
            promises.push(mal.getInfoFromName(titles[i]));
        }

        Promise.all(promises).then((values) => {
            res.status(200).json({"success": true, "message": values});
        });
    } else {
        mal.getInfoFromName(req.params.title)
            .then((data) => {
                res.status(200).json({"success": true, "message": data});
            })
            .catch((err) => {
                res.status(500).json({"success": false, "error": err.toString})
            });
    }
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