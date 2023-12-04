import {React, Group, GroupWrapper, } from "react";
// import "./style.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



function signUp()  {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    
    // return (
    //     <AuthPage
    //         title="Sign up for free"
    //         hintText="If you already have an account"
    //         linkText="login here!"
    //         linkUrl="./login"
    //     >
    //         <div className="form-group">
    //             <h1 className="sign-up-text-title">Sign Up</h1>
    //             <div className="Input-field">
    //                 <div className="input-box"></div>
    //                 <input type="text" className="first-name-input" placeholder="First name" />
    //             </div>
    //             <div className="Input-field">
    //                 <div className="input-box"></div>
    //                 <input type="text" className="last-name-input" placeholder="Last name" />
    //             </div>
    //             <div className="email-input-group">
    //                 <div className="input-box"></div>
    //                 <input type="text" className="email-username-input" placeholder="Email" />
    //             </div>
    //             <div className="password-input-group">
    //                 <div className="input-box"></div>
    //                 <input type="password" className="password-input" placeholder="Password" />
    //             </div>
    //             <div className="confirm-password-input-group">
    //                 <div className="input-box"></div>
    //                 <input type="password" className="confirm-password-input" placeholder="Confirm password" />
    //             </div>
    //             <button className="login-button" type="button">
    //                 <div className="login-button-background"></div>
    //                 <div className="login-text">Register</div>
    //             </button>
    //             <div className="google-sign-in">
    //                 <p className="continue-with-text">or continue with</p>
    //                 <a
    //                     className='flex items-center lg:gap-[10px] gap-[5px] w-full border rounded-[5px] lg:py-[10px] py-[5px] justify-center border-primary xl:text-base lg:text-sm text-xs hover:bg-athensGray cursor-pointer transition ease-in-out'
    //                     href=""
    //                 >
    //                     {/* <img
    //                         src={Google}
    //                         className='object-cover xl:w-6 w-5'
    //                         alt='Google icon'
    //                     /> */}
    //                     <span className='text-primary'>Đăng ký với Google</span>
    //                 </a>
    //             </div>
    //         </div>
    //     </AuthPage>
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[1440px] h-[1024px] relative">
                <div className="absolute w-[469px] h-[240px] top-[294px] left-[175px]">
                    <div className="relative h-[240px]">
                        <div className="absolute w-[473px] h-[133px] top-0 left-0">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[50px] tracking-[0] leading-[normal]">
                                Sign Up to
                            </div>
                            <div className="absolute w-[469px] top-[80px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px] tracking-[0] leading-[normal]">
                                Digital Library Education
                            </div>
                        </div>
                        <div className="absolute w-[325px] h-[54px] top-[186px] left-[4px]">
                            <p className="absolute w-[321px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                                If you already have an account
                            </p>
                            <p className="absolute w-[308px] top-[30px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]">
                                <span className="text-black">You can&nbsp;&nbsp; </span>
                                <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#4d47c3]">
                                    Login here !
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[373px] h-[683px] top-[100px] left-[892px]">
                    <Group className="!absolute !left-0 !top-[73px]" text="Enter Email" />
                    <Group className="!absolute !left-0 !top-[153px]" text="Create User name" />
                    <Group className="!absolute !left-0 !top-[233px]" text="Contact number" />
                    <div className="absolute w-[369px] h-[62px] top-[394px] left-0">
                        <div className="h-[62px]">
                            <div className="w-[371px] relative h-[62px]">
                                <div className="absolute w-[371px] h-[62px] top-0 left-0">
                                    <div className="w-[369px] bg-[#efefff] rounded-[8px] relative h-[62px]">
                                        <div className="absolute w-[147px] top-[20px] left-[29px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a7a2ff] text-[15px] tracking-[0] leading-[normal]">
                                            Confrim Password
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="absolute w-[17px] h-[17px] top-[23px] left-[320px]"
                                    alt="Invisible"
                                    src="invisible-1.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[369px] h-[62px] top-[313px] left-0">
                        <div className="h-[62px]">
                            <div className="w-[371px] relative h-[62px]">
                                <div className="absolute w-[371px] h-[62px] top-0 left-0">
                                    <div className="w-[369px] bg-[#efefff] rounded-[8px] relative h-[62px]">
                                        <div className="absolute w-[147px] top-[20px] left-[29px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a7a2ff] text-[15px] tracking-[0] leading-[normal]">
                                            Password
                                        </div>
                                    </div>
                                </div>
                                <img className="absolute w-[17px] h-[17px] top-[23px] left-[320px]" alt="Invisible" src="image.svg" />
                            </div>
                        </div>
                    </div>
                    <GroupWrapper
                        className="!absolute !left-0 !top-[484px]"
                        overlapGroupClassName="!bg-[#4262ff]"
                        text="Register"
                    />
                    <div className="absolute top-[590px] left-[120px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#b4b4b4] text-[16px] tracking-[0] leading-[normal]">
                        or continue with
                    </div>
                    <div className="absolute w-[41px] h-[41px] top-[642px] left-[176px] bg-[url(google.svg)] bg-[100%_100%]" />
                    <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[30px] tracking-[0] leading-[normal]">
                        Sign Up
                    </div>
                </div>
                {/* <img
                    className="absolute w-[326px] h-[152px] top-[69px] left-[101px] object-cover"
                    alt="Library"
                    src="library2-3.png"
                /> */}
            </div>
        </div>
    );
};

export default {signUp};