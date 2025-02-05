import { Facebook } from 'lucide-react';
import sideImage from '../assets/background/side.png';
import eTollLogo from '../assets/images/e toll logo.svg';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/dashboard'); // Redirect to dashboard or any other page after login
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side with background */}
      <div className="hidden lg:block w-[450px] relative flex justify-center items-center p-0 bg-[rgba(217,217,217,1)]">
        <img src={sideImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <img src={eTollLogo} alt="e-Toll Logo" className="absolute w-32 h-32" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
      
      {/* Right side with form */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
          <h1 className="text-3xl font-bold text-center">Welcome!</h1>
          <p className="text-center text-gray-600">Create a new account or log in</p>
          
          <div className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="email" className="text-base font-medium">Email</label>
              <input id="email" type="email" placeholder="Enter your email" className="w-full h-10 px-3 bg-gray-100 border border-gray-300 rounded-md" required />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="password" className="text-base font-medium">Password</label>
              <input id="password" type="password" placeholder="Enter your password" className="w-full h-10 px-3 bg-gray-100 border border-gray-300 rounded-md" required />
            </div>
          </div>
          
          <div className="text-right text-sm text-gray-500 cursor-pointer">Forget Password?</div>
          
          <div className="flex justify-center">
            <button type="submit" className="w-full max-w-xs h-10 text-base font-medium bg-black hover:bg-gray-800 text-white rounded-md">Login</button>
          </div>
          
          <div className="text-center text-gray-500">or login with</div>
          
          <div className="flex flex-col space-y-3">
            <button className="w-full flex items-center justify-center h-10 border border-gray-300 rounded-md space-x-2">
            <svg viewBox='0 0 24 24' className='w-5 h-5'>
								<path
									fill='#EA4335'
									d='M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z'
								/>
								<path
									fill='#34A853'
									d='M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z'
								/>
								<path
									fill='#4A90E2'
									d='M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z'
								/>
								<path
									fill='#FBBC05'
									d='M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z'
								/>
							</svg>
              <span>Login dengan Google</span>
            </button>
            <button className="w-full flex items-center justify-center h-10 border border-gray-300 rounded-md space-x-2">
              <Facebook className="w-5 h-5 text-[#1877F2]" />
              <span>Login dengan Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
