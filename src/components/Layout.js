import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

function Layout({ word, setWord }) {

    return (
        <div>
            <h1>WORD DEF</h1>
            <SearchBar />
            <Outlet />
        </div>
    );
}

export default Layout;