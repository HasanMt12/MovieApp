import useTitle from "../../hooks/useTitle";
import LoginForm from "../../pages/LoginForm";
import movie from '/clip.mp4'

const Login = () => {
	useTitle("Login")
	return (
		<>
		<video autoPlay loop muted style={{
			position:'absolute',width:'100%',height:'100%',top:'50%',left:'50%',objectFit:'cover',transform:'translate(-50%,-50%)',zIndex:'-1'
			}}>
			<source src={movie} type="video/mp4" />
		</video>
		<div className="grid lg:grid-cols-3 lg:pl-20 lg:pt-20 gap-2 md:grid-cols-1 " style={{backgroundClip:'url("/clip.mp4")',height:'600px',width:'100%' }}>
				<LoginForm/>
		</div>
		</>
	);
}

export default Login;
