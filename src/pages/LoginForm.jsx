
const LoginForm = ({handleClick}) => {

	return (
		
			<form className=" bg-transparent shadow-md rounded px-8 pt-14 pb-8 mb-4">
				<p className="text-4xl  text-orange-300 font-bold font-serif text-center" >Login Now !</p>
        <div className="mb-4 pt-7 ">
          <label className="block text-slate-100 text-xl  mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline h-12"
            id="email"
            type="email"
            placeholder="Enter your email"
               required
          />
        </div>
        <div className="mb-6">
          <label className="block text-slate-100 text-xl  mb-2" htmlFor="password">
            Password
          </label>
          <input
            className=" h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
               required
          />
	<p onClick={()=>handleClick(0)} className="cursor-pointer text-md font-semibold inline-block align-baseline font-bold text-sm text-lime-400 hover:text-blue-800" >New to site? Register </p>
        </div>
	
        <div className="flex items-center justify-between">
          <button
            className="h-12 w-28 bg-blue-500 hover:bg-red-500 transition-colors text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
		
	);
}

export default LoginForm;
