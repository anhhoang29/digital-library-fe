import { React } from "react";
import { Route, Routes } from "react-router-dom";

import ListCategories from "../../pages/student/category/ListCategories";
import DetailDocument from "../../pages/student/document/DetailDocument";
import LikedDocument from "../../pages/student/document/LikedDocuments";
import ListDocument from "../../pages/student/document/ListDocuments";
import StudentNewDocument from "../../pages/student/document/UploadDocument";
import ListOrganizations from "../../pages/student/organization/ListOrganizations";
import StudentProfile from "../../pages/student/user/Profile";
import UserWall from "../../pages/student/user/Wall";
// import Search from "../search/search";
// import UserHome from "../user/home";
// import UserProfile from "../user/profile";

const UserRoute = () => {
    return (
        <Routes>
            <Route path="/documents/:slug" element={<DetailDocument />} />
            <Route path="/liked" element={<LikedDocument />} />
            <Route path="/documents" element={<ListDocument />} />
            <Route path="/categories" element={<ListCategories />} />
            <Route path="/institutions" element={<ListOrganizations />} />
            <Route path="/me" element={<StudentProfile />} />
            <Route path="/upload" element={<StudentNewDocument />} />
            <Route path="/users/*" element={<UserWall />} />
        </Routes>
    );
};

export default UserRoute;
