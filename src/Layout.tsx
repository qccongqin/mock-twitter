import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";

const links = [
  { label: "Home", href: "/home", icon: <HomeIcon />, value: "home" },
  {
    label: "Explore",
    href: "/explore",
    icon: <SearchIcon />,
    value: "explore",
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <NotificationsIcon />,
    value: "notifications",
  },
  {
    label: "Messages",
    href: "/messages",
    icon: <EmailIcon />,
    value: "messages",
  },
];

export default function Layout() {
  const location = useLocation();
  const selectedValue = location.pathname.split("/")[1];

  return (
    <>
      <Outlet />
      <div className="fixed bottom-0 w-full">
        <BottomNavigation showLabels value={selectedValue}>
          {links.map((link) => (
            <BottomNavigationAction
              label={link.label}
              to={link.href}
              value={link.value}
              component={Link}
              icon={link.icon}
            />
          ))}

          {/* <BottomNavigationAction
            label="Home"
            to="/home"
            value="home"
            component={Link}
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            label="Explore"
            to="/explore"
            value="explore"
            component={Link}
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            label="Notifications"
            to="/notifications"
            value="notifications"
            component={Link}
            icon={<NotificationsIcon />}
          />
          <BottomNavigationAction
            label="Messages"
            to="/messages"
            value="messages"
            component={Link}
            icon={<EmailIcon />}
          /> */}
        </BottomNavigation>
      </div>
    </>
  );
}
