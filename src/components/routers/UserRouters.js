import { React } from "react";
import { Route, Routes } from "react-router-dom";


// import ReadDocument from "../document/document";
import Search from "../search/search";
import UserHome from "../user/home";
import UserProfile from "../user/profile";
import DocumentDetail from "../document/documentDetail";


const UserRoute = () => {
    return (
        <Routes>
            <Route path="/user" element={<UserHome />} />
            {/* <Route path="/user/documents/read" element={<ReadDocument />} /> */}
            {/* <Route path="/user/documents" element={<UserDocuments />} /> */}
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/search" element={<Search />} />
            <Route path="/user/document/detail" element={<DocumentDetail />} />
            {/* <Routhe path="/user/document/contribute" element={<DocumentContribute />} />"           */}
        </Routes>
    )
}

export default UserRoute