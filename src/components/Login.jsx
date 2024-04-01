import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#f3e1e3] font-montserrat">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex p-5 max-w-4xl bg-white rounded-[10px] shadow-lg shadow-gray-500">
          <form action="" onSubmit={onSubmit}>
            <div className="py-10">
              <h2 className="text-3xl font-extrabold">Login</h2>
            </div>
            <div className="flex justify-center my-2 mb-12 gap-5">
              <a
                href="/"
                className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="font text-[20px]"
                />
              </a>
              <a
                href="/"
                className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="font text-[20px]"
                />
              </a>
            </div>
            <p className="text-gray-500 my-3">or use your account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-80 p-2 flex items-center mb-4">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-gray-100 outline-none text-m flex-1 m-1 px-2"
                />
              </div>
              <div className="bg-gray-100 w-80 p-2 flex items-center mb-4">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="bg-gray-100 outline-none text-m flex-1 m-1 px-2"
                />
              </div>
              <div>
                <a
                  href="/"
                  className="text-gray-500 text-[17px] hover:text-gray-600"
                >
                  Forgot your password?
                </a>
              </div>
              <div>
                <button
                  className="w-full py-2.5 my-4 w-36 bg-[#FF4B2B] hover:bg-[#ff6e54]
                                        text-white text-sm font-bold uppercase rounded-full tracking-widest"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
