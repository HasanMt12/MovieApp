import { Link } from "react-router-dom";

const RegistrationForm = ({handleClick}) => {
	return (
		<>
		<p className="text-3xl text-red-400 font-semibold text-center">Register Here </p>
		<form  className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-stone-100 text-xl font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="  h-12  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-stone-100 text-xl font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="  h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
         
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-stone-100 text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="  h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-stone-100 text-xl font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className=" h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
	
        </div>
	<Link className=" pt-4 cursor-pointer capitalize text-md font-semibold inline-block align-baseline  text-sm text-lime-400 hover:text-blue-800" onClick={()=>handleClick(1)}> Already have an account? Login</Link>
      </form>			


		</>
	);
}

export default RegistrationForm;
