import { useState } from 'react';
import { Grid, Image, Title, Text } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroller';
import { isNil } from 'ramda';

import { IImages } from '../../pages/Search';
import { searchImages } from '../../api/images';
import Loader from '../Loader';

import './style.scss';

interface IInfiniteScroll {
    setImages: any;
    images: IImages;
    setError: any;
    error: boolean;
    handleOpenModal: any;
    search: string;
}

const IScroll = ({ setImages, images, setError, error, handleOpenModal, search }: IInfiniteScroll) => {
    const [ hasMore, setHasMore ] = useState<boolean>(true);

    const fetchMoreImages = async (page: number) => {
        let currentImageList: any = [];

        if (page === images.total_pages) setHasMore(false);

        if (!isNil(images)) {
            currentImageList = images.results;
        }

        if (error) setError(false);

        try {
            const res = await searchImages(search, page);

            if (!res.data.response)  {
                setHasMore(false);
                return;
            }
      
            const imageData: IImages = {
                ...res.data.response,
                results: currentImageList.concat(res.data.response.results)
            };

            setImages(imageData);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="infinite-scroll">
            <InfiniteScroll
                pageStart={1}
                hasMore={hasMore}
                loadMore={fetchMoreImages}
                loader={<div key={0}><Loader /></div>}
            >
                <Grid className="grid">
                    {images.results.map((i: any) => {
                        return (
                            <Grid.Col span={3} key={i.id} className="image-column" onClick={() => handleOpenModal(i)}>
                                <Image
                                    className="image"
                                    src={i.urls.regular}
                                    alt={i.alt_description}
                                    withPlaceholder
                                    fit="cover"
                                />
                                <span className="background-color">
                                    <Text className="text" weight={500} color="white">View</Text>
                                </span>
                            </Grid.Col>
                        )
                    })}
                    {!hasMore && (
                        <Grid.Col span={12}>
                            <Title order={3} align="center">No More Results</Title>
                        </Grid.Col>
                    )}
                </Grid>
            </InfiniteScroll>
        </div>
    )
};

export default IScroll;