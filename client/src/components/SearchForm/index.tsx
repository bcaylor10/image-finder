import { useState } from "react";
import { Container, Title, Text, Input, Button, Grid } from "@mantine/core";
import { isEmpty } from "ramda";

import SearchImage from '../../images/search.jpg';
import { searchImages } from "../../api/images";
import { IImages } from "../../pages/Search";

import './style.scss';

interface ISearchForm {
    setImages: any;
    search: string;
    setSearch: any;
}

const SearchForm = ({ setImages, search, setSearch }: ISearchForm) => {
    const [ error, setError ] = useState<string>('');

    const submit = async (e: any) => {
        e.preventDefault();
        if (search.length < 3) return setError('At least three (3) characters are required');
        
        try {
            const res = await searchImages(search);


            if (!res.data.response) return;


            setImages(res.data.response);
            setError('');
        } catch (err) {
            setError('Unable to retrieve images');
        }
    }
    
    return (
        <div className="search-form-container">
            <span 
                className="background-image"
                role="img" 
                aria-label="magnifying glass image"
                style={{
                    backgroundImage: `url(${SearchImage})`
                }}
            >
            </span>
            <Container className="container">
                <Title align="center" order={1} className="title">UnImage Finder</Title>
                <Text align="center" className="text">Search for images on Unsplash.com</Text>
                <form onSubmit={submit} className="search-form">
                    <Grid gutter="xs" align="center" justify="center">
                        <Grid.Col span={12}>
                            <label htmlFor="search" className="visually-hidden">Search Images</label>
                            <Input
                                name="search"
                                placeholder="Search Images"
                                type="search"
                                required
                                value={search}
                                onChange={(e: any) => setSearch(e.target.value)}
                            />
                        </Grid.Col>
                        <Grid.Col span={12} className="button-column">
                            <Button type="submit">Search</Button>
                        </Grid.Col>
                        {!isEmpty(error) && (
                            <Grid.Col span={12}>
                                <Text align="center" color="red">{error}</Text>
                            </Grid.Col>
                        )}
                    </Grid>
                </form>
            </Container>
        </div>
    )
};

export default SearchForm;