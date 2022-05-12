import UnsplashInstance from '../repositories/Unsplash';

export const searchUnsplashImages = (term: string, page: number) => {
    const unsplash = new UnsplashInstance();
    const images = unsplash.searchImages(term, page);
    
    return images;
};