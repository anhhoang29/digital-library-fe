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
import Home from "../../pages/student/Home";
import StudentEditDocument from "../../pages/student/document/EditDocument";
import SavedDocument from "../../pages/student/document/SavedDocuments";
import UploadedDocument from "../../pages/student/document/UploadedDocuments";
import ListFields from "../../pages/student/field/ListFields";
import Error404 from "../../pages/student/error/Error404";

import { useNavigate } from "react-router-dom";
import RecentDocument from "../../pages/student/document/RecentDocuments";
// import Search from "../search/search";
// import UserHome from "../user/home";
// import UserProfile from "../user/profile";

const UserRoute = () => {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/documents/upload" element={<StudentNewDocument />} />
            <Route path="/documents/:slug/edit" element={<StudentEditDocument />} />
            <Route path="/documents/:slug" element={<DetailDocument />} />

            <Route path="/me/likes" element={<LikedDocument />} />
            <Route path="/me/saves" element={<SavedDocument />} />
            <Route path="/me/uploads" element={<UploadedDocument />} />
            <Route path="/me/recents" element={<RecentDocument />} />
            <Route path="/me" element={<StudentProfile />} />

            <Route path="/documents" element={<ListDocument />} />
            <Route path="/search/:searchQuery" element={<ListDocument />} />
            <Route path="/categories/:categorySlug" element={<ListDocument />} />
            <Route path="/categories" element={<ListCategories />} />
            <Route path="/fields/:fieldSlug" element={<ListDocument />} />
            <Route path="/fields" element={<ListFields />} />
            <Route path="/institutions/:organizationSlug" element={<ListDocument />} />
            <Route path="/institutions" element={<ListOrganizations />} />

            <Route path="/users/:userId" element={<UserWall />} />

            <Route
                path="*"
                element={null}
                children={() => {
                    navigate("/error-404");
                    return null;
                }}
            />
        </Routes>
    );
};

export default UserRoute;
