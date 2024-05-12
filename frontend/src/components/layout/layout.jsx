import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Router from "../../router/Router";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const { id } = useParams();

  useEffect(() => {
    // Function to update the document title based on the current URL
    const updateTitle = () => {
      const pathname = location.pathname;
      let pageTitle = "Default Title"; // Default title
      console.log(pathname);
      console.log(id);

      // Switch statement to set different titles for different URLs
      switch (pathname) {
        case "/home":
          pageTitle = "Home Page";
          break;
        case "/about":
          pageTitle = "About Us";
          break;
        case "/tours":
          pageTitle = "Tours";
          break;
        case "/register":
          pageTitle = "Register";
          break;
        case "/login":
          pageTitle = "Login";
          break;
        case "/thank-you":
          pageTitle = "Thank You";
          break;


        default:
          pageTitle = "Tour Details";
          break;
      }

      // Update the document title
      document.title = pageTitle;
    };

    // Call the function to update the title when the component mounts
    updateTitle();

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      // No cleanup needed in this case
    };
  }, [location.pathname, id]); // Dependency array ensures that the effect runs when the pathname changes

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
