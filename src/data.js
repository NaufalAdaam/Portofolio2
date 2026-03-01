import HeroImage from "/assets/profile-pict.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/cp.jpeg";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/HTML5_Logo.png";
import Tools13 from "/assets/tools/css-3-logo.png";
import Tools14 from "/assets/tools/python.png";
import Tools15 from "/assets/tools/php.png";
import Tools16 from "/assets/tools/java.png";
import Tools17 from "/assets/tools/typescript.png";
import Tools18 from "/assets/tools/postgresql.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/laragon.png";
import Tools21 from "/assets/tools/Android.png";
import Tools22 from "/assets/tools/flutter.png";
import Tools23 from "/assets/tools/dart-logo.png";


export const listTools = [
  // Code Editor & IDE
  { id: 1, gambar: Tools1, nama: "Visual Studio Code", ket: "Code Editor", dad: 100 },
  { id: 2, gambar: Tools21, nama: "Android Studio", ket: "IDE", dad: 200 },

  // Frontend Development
  { id: 3, gambar: Tools12, nama: "HTML", ket: "Language", dad: 300 },
  { id: 4, gambar: Tools13, nama: "CSS", ket: "Language", dad: 400 },
  { id: 5, gambar: Tools6, nama: "JavaScript", ket: "Language", dad: 500 },
  { id: 6, gambar: Tools17, nama: "TypeScript", ket: "Language", dad: 600 },
  { id: 7, gambar: Tools2, nama: "React JS", ket: "Framework", dad: 700 },
  { id: 8, gambar: Tools3, nama: "Next JS", ket: "Framework", dad: 800 },
  { id: 9, gambar: Tools4, nama: "Tailwind CSS", ket: "Framework", dad: 900 },
  { id: 10, gambar: Tools5, nama: "Bootstrap", ket: "Framework", dad: 1000 },

  // Backend Development
  { id: 11, gambar: Tools7, nama: "Node JS", ket: "Runtime", dad: 1100 },
  { id: 12, gambar: Tools15, nama: "PHP", ket: "Language", dad: 1200 },
  { id: 13, gambar: Tools14, nama: "Python", ket: "Language", dad: 1300 },
  { id: 14, gambar: Tools16, nama: "Java", ket: "Language", dad: 1400 },

  // Database
  { id: 15, gambar: Tools19, nama: "MySQL", ket: "Database", dad: 1500 },
  { id: 16, gambar: Tools18, nama: "PostgreSQL", ket: "Database", dad: 1600 },

  // Mobile Development
  { id: 17, gambar: Tools22, nama: "Flutter", ket: "Framework", dad: 1700 },
  { id: 18, gambar: Tools23, nama: "Dart", ket: "Language", dad: 1800 },

  // UI / UX & Design
  { id: 19, gambar: Tools11, nama: "Figma", ket: "Design App", dad: 1900 },
  { id: 20, gambar: Tools10, nama: "Canva", ket: "Design App", dad: 2000 },
  { id: 21, gambar: Tools9, nama: "CapCut", ket: "Design App", dad: 2100 },

  // Development Tools
  { id: 22, gambar: Tools20, nama: "Laragon", ket: "Dev Tool", dad: 2200 },
  { id: 23, gambar: Tools8, nama: "GitHub", ket: "Repository", dad: 2300 },
];



import Proyek1 from "/assets/proyek/THEORBIT.png";
import Proyek2 from "/assets/proyek/WEBSITE SEDERHANA.png";
import Proyek3 from "/assets/proyek/REKOMENDASI FILM.png";
import Proyek4 from "/assets/proyek/nionstore.png";
import Proyek5 from "/assets/proyek/portalberita.png";
import Proyek6 from "/assets/proyek/LAUNDRY.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website E-Commerce Baju",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "PHP", "Bootstrap"],
    dad: "200",
    link: "#"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Dasar Kota Jepara",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS"],
    dad: "300",
    link: "https://websitedasar-dicoding.vercel.app/"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Rekomendasi Film",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Python", "Streamlit"],
    dad: "400",
    link: "https://rekomendasifilmpy.streamlit.app/"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Desain UI/UX Nion Store",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Figma"],
    dad: "500",
    link: "https://www.figma.com/design/7GDjmKVBZ55IHkP6WGxVib/Untitled?t=bwXopxrMqzVl4XMH-0"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Portal Berita",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["PHP", "React JS", "Tailwind CSS", "JavaScript"],
    dad: "600",
    link:"#"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Aplikasi Mobile AntarLaundry",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Android Studio", "React Native", "Javascript"],
    dad: "700",
    link:"#"
  },
];
