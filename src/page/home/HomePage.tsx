import { Link } from "react-router-dom";
import Header from "../../components/Header";
import SettingsIcon from "@mui/icons-material/Settings";

export default function HomePage() {
  return (
    <div>
      <Header>
        <div className="w-full flex flex-row items-center">
          <div className="grow">X</div>
          <Link to="pinned/edit">
            <SettingsIcon />
          </Link>
        </div>
      </Header>
    </div>
  );
}
