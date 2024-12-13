import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import ReCaptcha from "react-google-recaptcha";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setSuccessMessage(
        "¡Registrado exitosamente! Redirigiendo a productos..."
      );
      setTimeout(() => {
        navigate("/products");
      }, 3000);
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    setSuccessMessage("");
    signup(values);
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-md">
        <div className="container p-10 bg-zinc-900 backdrop-blur-lg border-b-4 border-l-4 border-white/30 rounded-2xl shadow-lg transform hover:shadow-xl transition-transform duration-500">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Regístrate
          </h1>
          {Array.isArray(registerErrors) &&
            registerErrors.map((error, i) => (
              <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                {error}
              </div>
            ))}
          {successMessage && (
            <div className="bg-green-500 p-2 my-2 text-white">
              {successMessage}
            </div>
          )}

          <form onSubmit={onSubmit} className="form-container text-center">
            <label
              htmlFor="username"
              className="block text-white text-lg font-semibold mb-2"
            >
              Usuario
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Usuario"
              {...register("username", { required: true, minLength: 5 })}
            />
            {errors.username?.type === "required" && (
              <p className="text-red-500">Nombre de usuario requerido</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-red-500">
                La longitud mínima es de 5 caracteres
              </p>
            )}

            <label
              htmlFor="email"
              className="block text-white text-lg font-semibold mb-2 mt-4"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-lg bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500">
                Por favor, introduce un Email válido
              </p>
            )}

            <label
              htmlFor="password"
              className="block text-white text-lg font-semibold mb-2 mt-4"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 rounded-lg bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Contraseña requerida</p>
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
              <IoPersonAdd size={24} className="inline mr-2" />
              Crear Cuenta
            </button>

            <ReCaptcha
              sitekey="6LeynJMqAAAAANFEJuLNJ1u6uvlw_RBTBfKIA3xT"
              onChange={(value) => setCaptchaValue(value)}
              className="mt-4"
            />
          </form>
          <p className="text-white mt-5">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-blue-400 underline">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
