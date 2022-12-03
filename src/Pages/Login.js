import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Login = () => {

    const { signIn, providerLogin, providerGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const gitHubprovider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success('Successful login')
            })
            .catch((error) => {
                console.error(error)
                toast.error('Something Wrong ! log in denied')
            })
    }

    const handleSignInGit = () => {
        providerGitHub(gitHubprovider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success('Successful login')
            })
            .catch((error) => {
                console.error('error', error)
                toast.error('Something Wrong ! log in denied')
            })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Login Successful')
            })
            .catch((error) => {
                console.error(error)
                toast.error('Something wrong, please try agin')
            })

    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-blue-500 mx-auto mt-20 text-start">
            <h1 className="text-2xl font-bold text-start text-white mb-5">Please Login</h1>
            <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-white text-xl">
                <div className="space-y-1 text-sm text-white">
                    <label for="username" className="block ">Email</label>
                    <input type="text" name="email" id="username" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-md text-gray-800 " />
                </div>
                <div className="space-y-1 text-sm text-white">
                    <label for="password" className="block ">Password</label>
                    <input type="password" name="password" id="password" placeholder=" Type Password" className="w-full px-4 py-3 rounded-md text-gray-800 " />
                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-blue-800 text-white hover:bg-blue-700 font-semibold">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-md text-white ">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center items-center gap-4 text-white">
                <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="rounded-sm">
                    <FaGoogle className='text-xl'></FaGoogle>
                </button>

                <button onClick={handleSignInGit} aria-label="Log in with Facebook" className="rounded-sm">
                    <FaGithub className='text-xl'></FaGithub>
                </button>
            </div>
            <p className=" text-center sm:px-6 text-md text-white">Don't have an account?
                <Link to='/register' rel="noopener noreferrer" href="#" className="underline "><span className='ml-2 text-white text-md' >Sign up</span></Link>
            </p>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;