import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoLogIn, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import ReCaptcha from "react-google-recaptcha";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signInErrors } = useAuth();
  const [passwordShow, setPasswordShown] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShow);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    signin(data);
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-md">
        <div className="container p-10 bg-zinc-900 backdrop-blur-lg border-b-4 border-l-4 border-white/30 rounded-2xl shadow-lg transform hover:shadow-xl transition-transform duration-500">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Login
          </h1>
          {Array.isArray(signInErrors) &&
            signInErrors.map((error, i) => (
              <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                {error}
              </div>
            ))}

          <form onSubmit={onSubmit} className="form-container text-center">
            <label
              htmlFor="email"
              className="block text-white text-lg font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-lg bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email es requerido</p>}

            <label
              htmlFor="password"
              className="block text-white text-lg font-semibold mb-2 mt-4"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordShow ? "text" : "password"}
                className="w-full p-2 rounded-lg bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {passwordShow ? (
                <IoEyeSharp
                  size={24}
                  className="absolute right-3 top-3 text-white cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEyeOffSharp
                  size={24}
                  className="absolute right-3 top-3 text-white cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password requerido</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                La longitud mínima es de 6 caracteres
              </p>
            )}

            <button
              className="w-full py-2 px-4 mt-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
              type="submit"
              disabled={!captchaValue}
            >
              <IoLogIn size={24} className="inline mr-2" />
              Iniciar Sesión
            </button>

            <ReCaptcha
              sitekey="6LeynJMqAAAAANFEJuLNJ1u6uvlw_RBTBfKIA3xT"
              onChange={(value) => setCaptchaValue(value)}
              className="mt-4"
            />
          </form>

          <p className="text-white mt-5">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-blue-400 underline">
              Crear una cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
