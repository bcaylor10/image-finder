import { useState } from 'react';
import { Container, Alert, Title, Divider, Grid, Image, Modal } from '@mantine/core';
import { path, isNil } from 'ramda';

import IScroll from '../InfiniteScroll';

interface IImages {
    setImages: any;
    images: any|null;
    search: string;
}

const Images = ({ setImages, images, search }: IImages) => {
    const [ currentImage, setCurrentImage ] = useState<any>(null);
    const [ error, setError ] = useState<boolean>(false);
    const [ open, setOpen ] = useState<boolean>(false);

    const handleOpenModal = (image: any) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    return (
        <>
        <section id="scrollable">
            <Container>
                {error && (
                    <Alert title="Error" color="red">
                        Error retreiving images
                    </Alert>
                )}
                <Title order={2} align="center">
                    Results: {isNil(images) ? 'No results found' : images?.total}
                </Title>
                <Divider my="lg" />
                {(!isNil(images) && images.results) && (
                    <>
                        <IScroll 
                            setImages={setImages} 
                            images={images} 
                            setError={setError}
                            error={error}
                            handleOpenModal={handleOpenModal}
                            search={search}
                        />
                        <Modal
                            size={700}
                            opened={open}
                            onClose={handleCloseModal}
                            title={path(['description'], currentImage)}
                        >
                            <Image
                                src={path(['urls', 'regular'], currentImage)}
                                alt={path(['alt_description'], currentImage)}
                                withPlaceholder
                            />
                        </Modal>
                    </>
                )}
            </Container>
        </section>
        </>
    )
};

export default Images;