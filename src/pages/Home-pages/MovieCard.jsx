import { Link } from "react-router-dom";
import { Card } from "../../components/shared/styled/cardStyled";

const MovieCard = ({movie}) => {
    const { title, cardImg2, _id} = movie;
    return (
        <>
                        <Card >
                             <Link to={`/movies/${_id}`}> 
                                <img src={cardImg2}></img>
                             </Link>    
                          </Card>
        </>
    );
};

export default MovieCard;