import { createApi } from 'unsplash-js';
import crossFetch from 'cross-fetch';

export default class UnsplashInstance {
    protected unsplash: any;

    constructor() {
        const unsplash = createApi({
            accessKey: process.env.ACCESS_KEY,
            fetch: crossFetch
        });
        this.unsplash = unsplash;
    }

    searchImages = (term: string, page?: number): [] => this.unsplash.search.getPhotos({
        query: term,
        page: page,
        perPage: 24
    });
}