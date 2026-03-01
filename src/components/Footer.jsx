const Footer = ({ darkMode }) => {
  return (
    <div
      className={`mt-32 py-10 px-5 md:px-20 flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center transition-colors duration-300 ${
        darkMode ? "border-t border-zinc-700" : "border-t border-zinc-200"
      }`}
    >
      <h1 className="text-2xl font-bold">Portofolio</h1>

      <div className="flex gap-8">
        <a href="#beranda" className="hover:text-blue-500 transition">
          Beranda
        </a>
        <a href="#tentang" className="hover:text-blue-500 transition">
          Tentang
        </a>
        <a href="#proyek" className="hover:text-blue-500 transition">
          Project
        </a>
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://github.com/NaufalAdaam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <i className="ri-github-fill"></i>
        </a>

        <a
          href="https://www.instagram.com/naufaladaam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <i className="ri-instagram-fill"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/naufaladaam/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;