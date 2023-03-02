import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../../store/reducers/notificationReducer";
import { logoutUser } from "../../store/actions/authAction";

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  IconButton,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";

import { showToast } from "../../utils/tools";

const Header = () => {
  const user = useSelector((state) => state.auth);
  const notifications = useSelector((state) => state.notifications);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  useEffect(() => {
    let { global } = notifications;
    if (notifications && global.error) {
      toast(showToast("Sorry", global.message, "error"));
      dispatch(clearNotifications());
    }
    if (notifications && global.success) {
      toast(showToast("Success", global.message, "success"));
      dispatch(clearNotifications());
    }
  }, [notifications, dispatch, toast]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={6}
      paddingY={4}
      bg="blue.400"
      position="sticky"
      top="0"
      zIndex="999"
      shadow={{ base: "md", md: "none" }}
    >
      <Box>
        <Heading size="sm" textColor="white" fontSize={20} fontFamily="arial">
          Payment Request System
        </Heading>
      </Box>
      <Spacer />
      {user && user.auth ? (
        <Box display={{ base: "none", md: "block" }}>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="blackAlpha"
              size="lg"
              variant="ghost"
              color="white"
            >
              Payreqs
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() =>
                  toast(showToast("test ninja", "Hallo ninja", "success"))
                }
              >
                Approved
              </MenuItem>
              <MenuItem onClick={() => navigate("/outgoings")}>
                Outgoings
              </MenuItem>
              <MenuItem>Realization</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="blackAlpha"
              size="lg"
              variant="ghost"
              color="white"
            >
              Accounting
            </MenuButton>
            <MenuList>
              <MenuItem>Dashboard</MenuItem>
            </MenuList>
          </Menu>

          <Button
            size="lg"
            variant="ghost"
            color="white"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Box>
      ) : null}
    </Flex>
  );
};

export default Header;
