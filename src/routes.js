import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./components/layout/mainLayout";
import { Container } from "@chakra-ui/react";

import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import Approveds from "./pages/approved";
import Outgoings from "./pages/outgoings";

const Router = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <MainLayout />
        <Container maxW="container.xl">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/approveds" element={<Approveds />} />
            <Route path="/outgoings" element={<Outgoings />} />
          </Routes>
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default Router;
