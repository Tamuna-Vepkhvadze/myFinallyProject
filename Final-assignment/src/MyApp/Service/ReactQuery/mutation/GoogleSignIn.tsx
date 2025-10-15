import { useNavigate } from "react-router-dom";
import userState from "../../../../zustand/userState";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import axios, { AxiosError } from "axios";

export default function GoogleSignIn() {
  const navigate = useNavigate(); 
  const { setUser } = userState();

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) {
        console.error("No credential returned from Google");
        return;
      }
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        token: credentialResponse.credential,
      });
      console.log(res.data);
      setUser(res.data.user, res.data.token);
      navigate("/"); 
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log("Login Failed")}
      size="large"
      theme="outline"
    
      
    />
  );
}
