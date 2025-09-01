 import { useEffect, useState } from "react";
import "./navbar.css";

  function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu on click (mobile)
  };

   useEffect(() => {
              const handleScroll = () => {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 0) {
                  navbar.classList.add('white-nav');
                  /* console.log("is added") */
                }  else {
                  navbar.classList.remove('white-nav');
                  /* console.log("is removed") */
                }
              };
        
              window.addEventListener('scroll', handleScroll);
        
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, []);

            
            const [isMenu, setIsMenu] = useState(false);

            const toggleMenu = () => {
              console.log("menu is added")
              setIsMenu(!isMenu)
            }

  return (
    <nav className="navbar" id="navbar">
      <div className="logo">Andrews</div>


      <ul className={`nav-links ${isMenu ? "menu-active" : ""}`}>
        {["home", "about", "services", "works", "blog", "contact"].map((item) => (
          <li
            key={item}
            className={activeSection === item ? "active" : ""}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

       <div className= {`menu-icon ${isMenu ? "menu-active" : ""}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                </div> 
    </nav>
  );
}

export default Navbar; 
