import { useState } from "react";
import GoogleIcon from "../assets/google.svg";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="max-w-[450px] mx-auto my-40 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] p-8">
      <h1 className="text-2xl font-bold text-slate-800 text-center mb-4">
        {hasAccount ? "Login to your account" : "Create your account"}
      </h1>
      <button className="focus:outline-none w-full flex justify-center gap-x-8 items-center border border-slate-300 rounded-md p-2 mb-8">
        <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
        <span>{hasAccount ? "Log in" : "Sign Up"} with Google</span>
      </button>

      <div className="flex justify-between items-center gap-x-16 px-2">
        <span className="text-slate-600">
          {hasAccount ? "New to Insignia?" : "Already have an account?"}
        </span>
        <button
          className="focus:outline-none text-violet-500 font-medium border-b border-b-transparent hover:border-b-violet-500"
          onClick={() => setHasAccount((prev) => !prev)}
        >
          {hasAccount ? "Create an account" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
