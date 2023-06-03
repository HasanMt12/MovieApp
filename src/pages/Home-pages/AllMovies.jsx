import { useEffect, useState } from "react";
import { Card, Container, FlexCenter, MovieSection,  } from "../../components/shared/styled/cardStyled";
import PrimaryButton from "../../components/shared/Button/Buttons";


const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [limit, setLimit] = useState(8)
    useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('MoviesData.json');
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
    return (
        <>
            <Container>
                <MovieSection>
                    {allMovies && 
                    allMovies.slice(0, limit).map((movie, key) => (
                            <Card key={key}>
                                <img src={movie.cardImg}></img>
                            </Card>
                    ))
                    }
                </MovieSection>
                <FlexCenter className="mt-4">
                     <PrimaryButton onClick={() => setLimit(limit + 2)}>show more
                    </PrimaryButton>
                </FlexCenter>
               
            </Container>
            
        </>
    );
};

export default AllMovies;