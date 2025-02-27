import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('market-place');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?technology')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-white/20">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">Welcome Back</h2>
        
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          
          <div className="flex items-center justify-between text-white text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-purple-300 hover:underline">Forgot Password?</a>
          </div>
          
          <button type="submit" className="w-full bg-purple-600 p-3 rounded-lg text-white font-bold hover:bg-purple-700 transition-all duration-300">
            Log in
          </button>
          
          <p className="text-gray-300 text-sm text-center mt-4">
            Don’t have an account?{' '}
            <a href="/register" className="text-purple-300 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
