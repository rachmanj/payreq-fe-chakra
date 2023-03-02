import cookie from "react-cookies";

export const showToast = (title, description, status) => {
  return {
    title: title,
    description: description,
    status: status,
    position: "bottom-center",
    variant: "subtle",
    duration: 5000,
    isClosable: true,
  };
};

export const setTokenCookie = (token) => {
  cookie.save("payreq-token", token, { path: "/" });
};
export const getTokenCookie = () => cookie.load("payreq-token");
export const removeTokenCookie = () =>
  cookie.remove("payreq-token", { path: "/" });
export const getAuthHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
    },
  };
};
