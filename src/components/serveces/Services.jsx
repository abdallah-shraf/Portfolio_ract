import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import "./Services.css";
const servicesData = [
    {
      id:1,
        icon: <MdDesignServices />,
        title: "UI/UX Design",
        description:
        "Creating user-friendly interfaces with a focus on user experience and aesthetics.",
  },
    {
        id:2,
        icon: <IoIosRocket />,
        title: "Web Development",
        description:
        "Building responsive and dynamic websites using modern technologies.",
  },
    {
        id:3,
        icon: <FaCode />,
        title: "Software Development",
        description:
        "Developing efficient and scalable software solutions tailored to client needs.",
  },
];
function Services() {
  return (
    <section className="services" id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_Services">
        {servicesData.map(({ id, icon, title, description }) => (
          <article key={id} className="card">
            <icon className="icon">{icon}</icon>

            <h3>{title}</h3>
            <p className="text-light"> {description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Services;
