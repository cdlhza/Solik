function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-600">
      {/* Banner principal */}
      <div
        className="bg-gray-800 bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/assets/banner.jpg')" }}
      >
        <div className="bg-gray-800 bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Bienvenidos a nuestra Tienda de Ropa
            <br />
            <span className="text-yellow-500">¡Explora nuestras ofertas!</span>
          </h1>
        </div>
      </div>

      {/* Categorías */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 text-center">
            <img
              src="/assets/hombres.jpg"
              alt="Hombres"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Hombres</h3>
            <p>Ropa y accesorios para él</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 text-center">
            <img
              src="/assets/mujeres.jpg"
              alt="Mujeres"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Mujeres</h3>
            <p>Ropa y accesorios para ella</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 text-center">
            <img
              src="/assets/unisex.jpg"
              alt="Unisex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Unisex</h3>
            <p>Estilo para todos</p>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="bg-white py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Producto 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl p-4 text-center">
            <img
              src="/assets/producto1.jpg"
              alt="Producto 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 font-semibold">Camiseta Premium</h3>
            <p className="text-gray-600">$20.00</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Ver Producto
            </button>
          </div>
          {/* Producto 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl p-4 text-center">
            <img
              src="/assets/producto2.jpg"
              alt="Producto 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 font-semibold">Sudadera Unisex</h3>
            <p className="text-gray-600">$35.00</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Ver Producto
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>&copy; 2024 Tienda de Ropa. Todos los derechos reservados.</p>
          <p>
            <a href="/about" className="text-yellow-400 hover:underline">
              Acerca de
            </a>{" "}
            |{" "}
            <a href="/contact" className="text-yellow-400 hover:underline">
              Contacto
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-yellow-400 hover:underline">
              Términos
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
