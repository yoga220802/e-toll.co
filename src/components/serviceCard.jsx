import { Link } from "react-router-dom";

const ServiceCard = ({ title, icon, path }) => {
  return (
    <Link to={path} className="bg-white p-6 shadow-md rounded-lg w-full text-center hover:bg-gray-100 flex flex-col items-center">
      <div className="w-15 h-15 text-center text-[rgba(17, 54, 131, 1)]">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </Link>
  );
};

export default ServiceCard;
