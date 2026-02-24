import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      toast.success("Welcome back, Owner!");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials (Use: admin@test.com / admin123)");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Owner Login</h2>
        <p className="text-gray-500 mb-8">Access your dashboard to manage stock.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all">
            Login
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-gray-400">
          Demo: admin@test.com / admin123
        </p>
      </div>
    </div>
  );
}