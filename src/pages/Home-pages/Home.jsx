import useTitle from "../../hooks/useTitle";
import AllMovies from "./AllMovies";
import Hero from "./Hero";
import './Home.css'
export const Home = () => {
	useTitle('home')
	return (
		<>
			<Hero></Hero>
			<AllMovies></AllMovies>
			<div className="card">
			<div className="wrapper">
			<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
			</div>
			<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
			<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
		</div>
		</>
	);
}

