import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Register = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { createUser, updateUserProfile, providerLogin, providerGitHub } = useContext(AuthContext);


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
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photoURL, email, password, confirm)



        if (password.length < 6) {
            setError('password should be at least 6 charecters')
        }

        if (password !== confirm) {
            setError('Your Password did not match')
            return;
        }


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                navigate(from, { replace: true });
                toast.success('Successfully login')
            })
            .catch((error) => {
                console.error(error)
                toast.error('Registration incomplete')
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.error(error))

    }



    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-blue-500 mx-auto mt-20 text-start ">
            <h1 className="text-2xl font-bold text-start text-white mb-5">Please Register</h1>
            <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-white text-xl">
                <div className="space-y-1 text-sm">
                    <label for="username" className="block">Name</label>
                    <input type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md text-gray-800" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block">Photo URL</label>
                    <input type="text" name="photoURL" id="photoURL" placeholder="Your photo url" className="w-full px-4 py-3 rounded-md text-gray-800" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-md text-gray-800 " />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block ">Password</label>
                    <input type="password" name="password" id="password" placeholder=" Type Password" className="w-full px-4 py-3 rounded-md text-gray-800 " />
                    <div className="flex justify-end text-xs ">
                    </div>
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block ">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" placeholder=" Confrim Password" className="w-full px-4 py-3 rounded-md text-gray-800 " />
                    <div className="flex justify-end text-xs ">
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-blue-800 hover:bg-blue-700 text-white font-semibold">Register</button>
                <div className='text-red-800'>
                    {error}
                </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-md text-white">Login with social accounts</p>
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
            <p className="text-md text-center sm:px-6 text-white">Already have an account?
                <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-100"><span className='ml-2 text-white text-md' >Login</span></Link>
            </p>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;