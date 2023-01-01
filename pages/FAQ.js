import Jumbotron from "../components/core/Jumbotron";
import Tab from "../components/core/Tab";
import LoginTemplate from "../components/layouts/LoginTemplate";

import styles from "../styles/FAQ.module.css";

const tabObj = [
  {
    id: "FAQ1",
    optionName: "Apa itu Troffen?",
    desc: [{ descId: "desc1", val: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla." }],
  },
  {
    id: "FAQ2",
    optionName: "Bagaimana Cara Menjadi Guru di Troffen?",
    desc: [{ descId: "desc1", val: "Instruksi 1" }],
  },
  {
    id: "FAQ3",
    optionName: "Bagaimana Cara Memesan Kursus di Troffen?",
    desc: [{ descId: "desc1", val: "Instruksi 1" }],
  },
];

const FAQ = () => {
  const defaultType = tabObj[0].id;
  return (
    <LoginTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron title="Butuh bantuan?" placeholder="Cari informasi disini..." buttonLabel="Cari" />
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.title}>Frequently Asked Questions</div>
          <div className={styles.content}>
            <Tab tabObj={tabObj} defaultType={defaultType} />
          </div>
        </div>
      </div>
    </LoginTemplate>
  );
};

export default FAQ;
