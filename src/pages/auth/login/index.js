import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { loginUser } from "../../../store/actions/authAction";

const Login = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (notifications && notifications.global.success) {
      navigate("/dashboard");
    }
  }, [notifications]);

  return (
    <Flex
      bg="blue.100"
      align="center"
      justify="center"
      h="100vh"
      w="100%"
      pos="absolute"
      top="0"
      left="0"
    >
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {/* helper text */}
              {formik.errors.email && formik.touched.email ? (
                <Box color="red.500" fontSize="sm">
                  {formik.errors.email}
                </Box>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            {/* helper text */}
            {formik.errors.password && formik.touched.password ? (
              <Box color="red.500" fontSize="sm">
                {formik.errors.password}
              </Box>
            ) : null}
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
