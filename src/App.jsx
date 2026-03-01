import React, { useState } from 'react';
import DataImage from './data';
import { listTools, listProyek } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${darkMode ? 'bg-zinc-900 text-white' : 'bg-slate-50 text-slate-900'
        } transition-colors duration-300 min-h-screen px-5 md:px-20`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
      >
        {darkMode ? (
          <i className="ri-sun-line"></i>
        ) : (
          <i className="ri-moon-line"></i>
        )}
      </button>

      {/* ================= HERO ================= */}
      <div className="hero grid md:grid-cols-2 items-center pt-20 gap-6">
        <div>
          <div
            className={`flex items-center gap-3 mb-6 ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-md'
              } w-full max-w-md p-4 rounded-2xl`}
          >
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 rounded-md"
            />
            <div
              className={`text-sm ${darkMode ? 'text-zinc-300' : 'text-slate-600'
                }`}
            >
              <q>
                Like a novelist, what matters is not how good your pen is,
                but how powerfully your story resolves the conflict.
              </q>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, Saya Naufal Adam Noorrahmat
          </h1>

          <p
            className={`leading-loose mb-6 ${darkMode ? 'opacity-60' : 'text-slate-500'
              }`}
          >
            I am an Informatics Engineering student at UPN "Veteran" East Java
            with an interest in software development. This site contains
            information about me and serves primarily as personal documentation.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-500 text-white text-sm transition"
            >
              Download CV
            </a>
            <a
              href="#proyek"
              className={`p-4 rounded-2xl text-sm transition ${darkMode
                  ? 'bg-zinc-700 hover:bg-zinc-600'
                  : 'bg-slate-200 hover:bg-slate-300'
                }`}
            >
              Lihat Project
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-full max-w-[500px] mx-auto"
        />
      </div>

      {/* ================= TENTANG ================= */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className={`xl:w-2/3 mx-auto p-7 ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-xl'
            } rounded-lg`}
        >
          <div className="space-y-6 leading-loose text-justify">
            <p>
              I am Naufal Adam, a 6th-semester Informatics undergraduate at UPN
              'Veteran' East Java, passionate about building seamless digital
              experiences. I specialize in Full-Stack Web and Mobile Development.
            </p>

            <p>
              My technical skillset extends to back-end development with PHP,
              Python, and SQL (MySQL), supported by tools like Laragon and XAMPP.
              I also combine strong UI/UX design principles using Figma and Canva.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl text-blue-600">
              6<span>+</span>
            </h1>
            <p>Project Selesai</p>
          </div>
        </div>

        {/* ================= TOOLS ================= */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-6">Tools yang dipakai</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className={`flex items-center gap-3 p-4 rounded-md border transition ${darkMode
                    ? 'border-zinc-700 hover:bg-zinc-800'
                    : 'border-slate-200 hover:bg-blue-50'
                  }`}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 p-1 rounded-md"
                />
                <div>
                  <h4 className="font-semibold">{tool.nama}</h4>
                  <p className="text-sm opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PROYEK ================= */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-10">Project</h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 items-stretch">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className={`p-5 rounded-md flex flex-col h-full ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-lg'
                }`}
            >
              <img
                src={proyek.gambar}
                alt="Proyek"
                className="rounded-md mb-4"
              />

              <h2 className="text-2xl font-bold mb-3">{proyek.nama}</h2>

              <p className="mb-4 opacity-70 flex-grow">
                {proyek.desk}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs rounded-md border ${darkMode
                        ? 'bg-zinc-700 border-zinc-600'
                        : 'bg-blue-50 border-blue-100 text-blue-600'
                      }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={proyek.link}
                className="block text-center bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-500 transition mt-auto"
              >
                Lihat Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= KONTAK ================= */}
      <div className="kontak mt-32 pb-20" id="kontak">
        <h1 className="text-4xl font-bold text-center mb-10">Contact</h1>

        <form
          action="https://formsubmit.co/cendoldawetts2521@gmail.com"
          method="POST"
          className={`p-10 sm:w-[500px] w-full mx-auto rounded-md ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-2xl'
            }`}
        >
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                required
                className={`w-full mt-2 p-2 rounded-md border ${darkMode
                    ? 'bg-zinc-700 border-zinc-600'
                    : 'bg-slate-50 border-slate-200'
                  }`}
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className={`w-full mt-2 p-2 rounded-md border ${darkMode
                    ? 'bg-zinc-700 border-zinc-600'
                    : 'bg-slate-50 border-slate-200'
                  }`}
              />
            </div>

            <div>
              <label className="font-semibold">Pesan</label>
              <textarea
                name="pesan"
                rows="5"
                required
                className={`w-full mt-2 p-2 rounded-md border ${darkMode
                    ? 'bg-zinc-700 border-zinc-600'
                    : 'bg-slate-50 border-slate-200'
                  }`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-500 transition"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;