import express, { Request, Response } from 'express';

import { searchUnsplashImages } from '../controllers/ImageController';

type Route = {
    req: Request;
    res: Response;
}

const router = express.Router();

router.post<Route>('/', async (req, res) => {
    const term: string = req.body.search;
    const page: number = req.body.page || 1;
    
    // force at least three characters for search
    if (term.length < 3) return res.status(401).json("At least three characters required");

    try {
        const images = await searchUnsplashImages(term, page);
        res.status(200).json(images);
    } catch (err) {
        res.status(404);
    }
});

export default router;