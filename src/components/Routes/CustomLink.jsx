import { NavLink } from "react-router-dom";
import "../components.css";

export const CustomLink = ({ children, to, ...props }) => {
  return (
    <NavLink to={to} {...props} className="RouteLink">
      {children}
    </NavLink>
  );
};
