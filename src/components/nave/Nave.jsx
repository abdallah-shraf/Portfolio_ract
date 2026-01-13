import { IoHomeOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nave.css";
import {useEffect, useState } from "react";
const navItems = [
  { href: "#home", icon: <IoHomeOutline /> },
  { href: "#about", icon: <LuUsersRound /> },
  { href: "#skills", icon: <BiBook /> },
  { href: "#services", icon: <RiServiceLine /> },
  { href: "#portfolio", icon: <CiFileOn /> },
  { href: "#contact", icon: <BiMessageSquareDetail /> },
];
function Nave() {
    const [activeNav, setActiveNav] = useState();
    useEffect(() => {
       const handleScroll = () => {
         const sections = document.querySelectorAll("section");
         let current = "#home"; // default when scroll to top

         sections.forEach((section) => {
           const rect = section.getBoundingClientRect();

           if (rect.top <= 100 && rect.bottom >= 100) {
             current = `#${section.id}`;
           }
         });

         setActiveNav(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // لتحديد active عند تحميل الصفحة

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <nav>
      {navItems.map((item) => (
        <a
          href={item.href}
          className={activeNav === item.href ? "active" : ""}
          onClick={() => setActiveNav(item.href)}
        >
          {item.icon}
        </a>
      ))}
     
    </nav>
  );
}

export default Nave;
