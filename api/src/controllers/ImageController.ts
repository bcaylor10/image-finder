import UnsplashInstance from '../repositories/Unsplash';

export const searchUnsplashImages = (term: string) => {
    const unsplash = new UnsplashInstance();
    const images = unsplash.searchImages(term);
    
    return images;
};