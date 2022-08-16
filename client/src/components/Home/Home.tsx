import React, { useState } from "react";
import funcs from "../../tools/Movies";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import './Home.css';

const Home = () =>{
    const [name, updateName] = useState<any>('');
    const [movies, updateMovies] = useState<any>([]);
    const onChange: any = (n: String) =>{
        updateName(n)
    }
    const onSearch: any = () => {

        funcs.searchByName(name, (res: any)=> {
            if (res.Response) updateMovies(res.Search);
            console.log(res)
        });
    }
    return <>
        <h1 id="app_title">Search Movies</h1>
        <Form id="movie_name_search" >
                <Form.Control size="lg" type="text" placeholder="Movie's name" onChange={(e: any)=>onChange(e.target.value)}></Form.Control>
                <br></br>
                <Button onClick={onSearch} variant="secondary">
                    Search
                </Button>
        </Form>
    </>
}

export default Home;