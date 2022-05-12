import { useState, useEffect } from 'react';

import Layout from '../Layout';
import SearchForm from '../../components/SearchForm';
import Images from '../../components/Images';

export type IImages = {
    total: number;
    total_pages: number;
    results: any[];
}

const Search = () => {
    const [ images, setImages ] = useState<IImages|null>(null);
    const [ search, setSearch ] = useState<string>('');

    return (
        <Layout>
            <SearchForm 
                setImages={setImages} 
                search={search}
                setSearch={setSearch}
            />
            <Images 
                setImages={setImages}
                images={images}
                search={search}
            />
        </Layout>
    )
};

export default Search;