import { Outlet } from "react-router-dom";
import Header from "./header";
import { Container } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
