import { Container, Skeleton, Title, Divider, Grid, Image } from '@mantine/core';
import { isNil } from 'ramda'; 

interface IImages {
    images: any|null;
    loading: boolean;
}

const Images = ({ images, loading }: IImages) => {
    return (
        <section>
            <Container>
                {loading ? (
                    <>
                        <Skeleton height={10} mt={6} width="60%" radius="xl"/>
                        <Skeleton height={10} mt={6} width="100%" radius="xl" />
                        <Skeleton height={10} mt={6} width="70%"radius="xl" />
                        <Skeleton height={10} mt={6} width="80%" radius="xl" />
                    </>
                ) : (
                    <>
                        <Title order={2} align="center">
                            Results: {isNil(images) ? 'No results found' : images?.total}
                        </Title>
                        <Divider my="lg" />
                        {(!isNil(images) && images.results) && (
                            <Grid>
                                {images.results.map((i: any) => {
                                    return (
                                        <Grid.Col span={3} key={i.id}>
                                            <Image
                                                src={i.urls.regular}
                                                alt={i.alt_description}
                                            />
                                        </Grid.Col>
                                    )
                                })}
                            </Grid>
                        )}
                    </>
                )}
            </Container>
        </section>
    )
};

export default Images;