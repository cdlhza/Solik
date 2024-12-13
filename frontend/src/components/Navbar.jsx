import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  IoPersonAdd,
  IoLogIn,
  IoAddCircle,
  IoEye,
  IoLogOut,
  IoPerson,
  IoHome,
} from "react-icons/io5";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  // Función para obtener el título basado en la ruta actual
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/products":
        return "Productos";
      case "/add-product":
        return "Agregar Producto";
      case "/profile":
        return "Perfil";
      case "/":
        return "Inicio";
      default:
        return "Tienda";
    }
  };

  // Determinar el botón dinámico basado en la página actual
  const renderDynamicButton = () => {
    if (location.pathname === "/products") {
      // En "Productos", mostrar botón para agregar producto
      return (
        <li>
          <Link
            to="/add-product"
            className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
          >
            <IoAddCircle size={20} />
            <span>Agregar Producto</span>
          </Link>
        </li>
      );
    } else if (
      location.pathname === "/add-product" ||
      location.pathname === "/profile"
    ) {
      // En "Agregar Producto" o "Perfil", mostrar botón para ver productos
      return (
        <li>
          <Link
            to="/products"
            className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
          >
            <IoEye size={20} />
            <span>Ver Productos</span>
          </Link>
        </li>
      );
    }
    return null; // No mostrar el botón en otras páginas
  };

  return (
    <nav className="bg-gray-800 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
      {/* Título dinámico */}
      <h1 className="text-2xl font-bold">{getPageTitle()}</h1>

      {/* Enlaces de navegación */}
      <ul className="flex gap-x-4 items-center">
        {/* Botón de Inicio */}
        <li>
          <Link
            to="/"
            className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
          >
            <IoHome size={20} />
            <span>Inicio</span>
          </Link>
        </li>

        {isAuthenticated ? (
          <>
            {/* Enlace al perfil */}
            <li>
              <Link
                to="/profile"
                className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
              >
                <IoPerson size={20} />
                {user.username}
              </Link>
            </li>

            {/* Botón dinámico */}
            {renderDynamicButton()}

            {/* Botón de salir */}
            <li>
              <Link
                to="/"
                onClick={() => logout()}
                className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
              >
                <IoLogOut size={20} />
                <span>Salir</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* Botón de iniciar sesión */}
            <li>
              <Link
                to="/login"
                className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
              >
                <IoLogIn size={20} />
                <span>Iniciar sesión</span>
              </Link>
            </li>

            {/* Botón de registrarse */}
            <li>
              <Link
                to="/register"
                className="rounded-sm flex items-center px-3 py-2 gap-2 text-white hover:bg-zinc-600 transition"
              >
                <IoPersonAdd size={20} />
                <span>Registrarse</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
