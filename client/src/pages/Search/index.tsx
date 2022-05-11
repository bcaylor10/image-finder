import { useState, useEffect } from 'react';

import Layout from '../Layout';
import SearchForm from '../../components/SearchForm';
import Images from '../../components/Images';

type IImages = {
    total: number;
    total_pages: number;
    current_page?: number;
    results: any[];
}

const Search = () => {
    const [ images, setImages ] = useState<IImages|null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);

    console.log(images);

    return (
        <Layout>
            <SearchForm setImages={setImages} setLoading={setLoading} />
            <Images images={images} loading={loading} />
        </Layout>
    )
};

export default Search;