import { useEffect, useState } from "react";
import {  Container, FlexCenter, MovieSection,  } from "../../components/shared/styled/cardStyled";

import MovieCard from "./MovieCard";



const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [limit, setLimit] = useState(8)
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://movie-server-ashy.vercel.app/movies');
                const data = await response.json();
                setAllMovies(data)
                console.log(data);
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(allMovies)
    return (
        <div className="w-11/12 mx-auto">
         
            <Container>
                <MovieSection>
                    {allMovies && 
                    allMovies.slice(0, limit).map((movie, key) => (
                       <MovieCard key={key} movie={movie}>

                       </MovieCard>
                         
                        
                    ))
                    }
                </MovieSection>
                <FlexCenter className="mt-4">
                    <button onClick={() => setLimit(limit + 8)} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-600/80 text-red-600/80 text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600/80 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-red-600/80 transition duration-300 group-hover:text-white ease">Show more</span>
                    </button>
                </FlexCenter>
              
            </Container>
            
        </div>
    );
};

export default AllMovies;