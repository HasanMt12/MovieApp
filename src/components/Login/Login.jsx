import movie from '/clip.mp4'
import { useState } from "react";
import LoginForm from "../../pages/LoginForm";
import RegistrationForm from "../../pages/RegistrationForm";

const Login = () => {
	const [showComponentOne, setShowComponentOne] = useState(true);

      const handleClick = () => {
      setShowComponentOne(!showComponentOne);
  };
	return (
		<>
		<video autoPlay loop muted style={{
			position:'absolute',width:'100%',height:'100%',top:'50%',left:'50%',objectFit:'cover',transform:'translate(-50%,-50%)',zIndex:'-1'
			}}>
			<source src={movie} type="video/mp4" />
		</video>
		<div className="grid lg:grid-cols-3 gap-2 md:grid-cols-1" style={{backgroundClip:'url("/clip.mp4")',height:'600px',width:'100%' }}>
				<div>
					{showComponentOne ? <LoginForm handleClick={handleClick}/> : <RegistrationForm handleClick={handleClick} />}
				</div>
		</div>
		</>
	);
}

export default Login;
