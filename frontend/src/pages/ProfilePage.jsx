import { useAuth } from "../context/AuthContext"; // Usamos el contexto de autenticación
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth(); // Obtenemos el usuario y la función de logout del contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llamamos a la función de logout
    navigate("/login"); // Redirigimos al usuario al inicio de sesión
  };

  if (!user) {
    return <p>Cargando información...</p>; // Si no hay usuario, mostramos un mensaje de carga
  }

  return (
    <div style={styles.container}>
      <h1>Perfil de Usuario</h1>
      <div style={styles.card}>
        <h2>¡Hola, {user.username || "Usuario"}!</h2>
        <p>
          <strong>Email:</strong> {user.email || "No disponible"}
        </p>
        <button style={styles.button} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

// Estilos en línea (puedes usar CSS o frameworks como Tailwind si prefieres)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ff5f5",
  },
  card: {
    backgroundColor: "#ff5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
