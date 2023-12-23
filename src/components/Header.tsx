import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";

type HeaderProps = {
    children?: ReactNode
}
export default function Header({children}: HeaderProps) {

    return <div className="flex flex-row p-4">
        <Avatar alt="avatar" src="https://avatars.githubusercontent.com/u/18369201?v=4"/>
        {children}
    </div>
}