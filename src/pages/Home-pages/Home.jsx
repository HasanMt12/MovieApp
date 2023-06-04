import useTitle from "../../hooks/useTitle";
import AllMovies from "./AllMovies"
import Hero from "./Hero";
import './Home.css'
export const Home = () => {
	useTitle('home')
	return (
		<>
			<Hero></Hero>
			<AllMovies></AllMovies>
			
		</>
	);
}

