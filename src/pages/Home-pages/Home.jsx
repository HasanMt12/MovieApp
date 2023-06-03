import useTitle from "../../hooks/useTitle";
import AllMovies from "./AllMovies";

export const Home = () => {
	useTitle('home')
	return (
		<>
			<AllMovies></AllMovies>
		</>
	);
}

