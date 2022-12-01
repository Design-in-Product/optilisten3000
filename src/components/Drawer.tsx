import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PolicyIcon from "@mui/icons-material/Policy";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import GavelIcon from "@mui/icons-material/Gavel";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AppsIcon from "@mui/icons-material/Apps";
import { FC, ReactNode } from "react";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  PATH_ABOUT_APP,
  PATH_ABOUT_US,
  PATH_FAQ,
  PATH_FEEDBACK,
  PATH_HOW_TO_USE,
  PATH_PRIVACY,
  PATH_SETTINGS,
  PATH_WHO_WE_ARE,
} from "../routes/paths";

interface MenuItemInfo {
  text: string;
  icon: ReactNode;
  onClick: () => void;
}

interface Props {
  drawerOpened: boolean;
  toggleDrawer: (val: boolean) => void;
}
export const Drawer: FC<Props> = ({ drawerOpened, toggleDrawer }) => {
  const navigate = useNavigate();

  const MenuIcons: MenuItemInfo[] = [
    {
      text: "How to Use",
      icon: <DataUsageIcon />,
      onClick: () => navigate(PATH_HOW_TO_USE),
    },
    {
      text: "About the App",
      icon: <AppsIcon />,
      onClick: () => navigate(PATH_ABOUT_APP),
    },
    {
      text: "Privacy Policy",
      icon: <PolicyIcon />,
      onClick: () => navigate(PATH_PRIVACY),
    },
    {
      text: "Who We Are",
      icon: <PeopleAltIcon />,
      onClick: () => navigate(PATH_WHO_WE_ARE),
    },
    {
      text: "FAQ",
      icon: <LiveHelpIcon />,
      onClick: () => navigate(PATH_FAQ),
    },
    {
      text: "About Us",
      icon: <InfoIcon />,
      onClick: () => navigate(PATH_ABOUT_US),
    },
    {
      text: "Feedback",
      icon: <FeedbackIcon />,
      onClick: () => navigate(PATH_FEEDBACK),
    },
    {
      text: "Settings",
      icon: <GavelIcon />,
      onClick: () => navigate(PATH_SETTINGS),
    },
  ];

  const Menus = () => {
    return (
      <Box
        sx={{ width: 250, paddingTop: 4 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <div className="flex justify-center pb-4">
          <img src={Logo} alt="Logo" width={67} />
        </div>
        <List>
          {MenuIcons.map((menuIcon, index) => (
            <ListItem key={index} disablePadding onClick={menuIcon.onClick}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemIcon>{menuIcon.icon}</ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={menuIcon.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={drawerOpened}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      {Menus()}
    </SwipeableDrawer>
  );
};
