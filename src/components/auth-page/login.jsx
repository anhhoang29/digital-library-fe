import { useState, React, useEffect } from "react";
import logo from '../assets/images/logo.png';
import signUp from "./sign-up";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import loginAction from "../../redux/actions/LoginAction"
import { getProfile } from "../../api/main/userAPI";
import { emailRegrex } from "../../utils/regrex";
const LOGIN_URL = "/auth/login";

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    setMessage("");
    setEmailMessage("");
    setPasswordMessage("");
  }, [emailOrUsername, password]);

  const validateEmailOrUsername = () => {
    if (emailOrUsername === "" || emailOrUsername.trim() === "") {
      setEmailMessage("Email không được để trống");
    } else if (!emailRegrex.test(emailOrUsername)) {
      setEmailMessage("Email không hợp lệ");
    }
  };

  const validatePassword = () => {
    if (password === "" || password.trim() === "") {
      setPasswordMessage("Mật khẩu không được để trống");
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    validateEmailOrUsername();
    validatePassword();
    if (emailOrUsername && password) {
      try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({ emailOrUsername, password }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setIsLoading(false);
        if (response.data.status === 401) {
          setMessage("Email or password is incorrect");
          setStatus(-1);
          setTimeout(() => {
            setMessage("");
          }, 4000);
        } else if (response.data.status === 400) {
          setMessage("Có lỗi xảy ra");
          setStatus(-1);
          setTimeout(() => {
            setMessage("");
          }, 4000);
        } else {
          setMessage("Đăng nhập thành công!");
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);

          const config = {
            headers: {
              Authorization: "Bearer " + response.data.data.accessToken,
            },
          };

          const res = await getProfile(config);
          const user = res.data;

          dispatch(loginAction.setUser(user));
          setStatus(1);
          setTimeout(() => {
            navigate("/user/home");
            setStatus(0);
          }, 2000);

        }
      }
      catch (err) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="w-[1440px] h-[900px] relative bg-white">
      <div className="w-[463px] h-60 left-[175px] top-[294px] absolute">
        <div className="w-[463px] h-[141px] left-0 top-0 absolute">
          <div className="left-0 top-0 absolute text-black text-[50px] font-semibold font-['Poppins']">Sign in to </div>
          <div className="w-[459px] left-[4px] top-[88px] absolute text-black text-[35px] font-medium font-['Poppins']">Digital Library Education</div>
        </div>
        <div className="w-[308px] h-[54px] left-[4px] top-[186px] absolute">
          <div className="w-[308px] left-0 top-0 absolute text-black text-base font-normal font-['Poppins']">If you don’t have an account register</div>
          <div className="w-[308px] left-0 top-[30px] absolute">
            <span style={{ color: 'black', fontSize: 'base', fontWeight: 'normal', fontFamily: ['Poppins'] }}>You can</span>
            <a href='/register' style={{ color: '#7975D2', fontSize: 'base', fontWeight: 'bold', fontFamily: ['Poppins'] }}> Register here !</a>
          </div>
        </div>
      </div>
      <div className="w-[369px] h-[455px] left-[892px] top-[174px] absolute">
        <div className="w-[369px] h-[62px] left-0 top-[73px] absolute justify-center items-center inline-flex">
          <div className="w-[369px] h-[62px] relative">
            <div className="w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
            <div className="absolute">
              <input
                type="text"
                name="emailOrUsername"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                placeholder="Enter email or user name"
                style={{ border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', background: 'transparent', fontFamily: ['Poppins'] }}
              />
            </div>
          </div>
        </div>
        <div className="w-[369px] h-[99px] left-0 top-[173px] absolute">

          <div className="w-[369px] h-[62px] left-0 top-0 absolute">
            {/* <div className="w-[369px] h-[62px] left-0 top-0 absolute"> */}
            <div className="w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
            <div className=" absolute font-normal font-['Poppins']">
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                placeholder="Enter password"
                style={{ border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', background: 'transparent', }}
              />
              {passwordMessage && (
                <p className="mt-2 italic">
                  <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {passwordMessage}</div>
                </p>
              )}
            </div>
            {/* </div> */}
            {/* <div className="w-[17px] h-[17px] left-[320px] top-[23px] absolute">
              <div className="w-[17px] h-[14.68px] left-0 top-[1.16px] absolute"></div>
            </div> */}
          </div>

          <div className="left-[250px] top-[79px] absolute text-zinc-400 text-[13px] font-normal font-['Poppins']">Forgot password ?</div>
        </div>
        <div className="w-[369px] h-[59px] left-0 top-[318px] absolute justify-center items-center inline-flex">
          <button
            className="w-[369px] h-[59px] relative bg-blue-500 rounded-[9px] shadow"
            onClick={handleLogin}
          >
            <div className="left-[158px] top-[18px] absolute text-white text-base font-medium font-['Poppins']">
              Login
            </div>
          </button>
        </div>
        <div className="left-[120px] top-[431px] absolute text-zinc-400 text-base font-medium font-['Poppins']">or continue with</div>
        <div className="left-0 top-0 absolute text-black text-3xl font-medium font-['Poppins']" style={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Sign in
        </div>
      </div>
      <img className="w-[336px] h-[336px] left-[140px] top-[5px] absolute" src={logo} />
      <div className="w-[41.46px] h-[41.46px] left-[1060px] top-[644px] absolute flex-col justify-start items-start flex" />
    </div>
  );
}

export default Login;
