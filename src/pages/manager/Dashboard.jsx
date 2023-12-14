import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../../components/management/status-card/StatusCard";

import Table from "../../components/management/table/Table";

import { getLatestDocumentsByOrganization } from "../../api/main/documentAPI";
import { getGeneralStatisticsForManager } from "../../api/main/statisticsAPI";
import { getLatestUsersByOrganization } from "../../api/main/userAPI";
import usePrivateAxios from "../../api/usePrivateAxios";

const chartOptions = {
    series: [
        {
            name: "Online Customers",
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
        },
        {
            name: "Store Customers",
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
        },
    ],
    options: {
        color: ["#6ab04c", "#2980b9"],
        chart: {
            background: "transparent",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },
        legend: {
            position: "top",
        },
        grid: {
            show: false,
        },
    },
};

const latestUserHead = ["Họ", "Tên", "Email"];

const renderLatestUserHead = (item, index) => (
    <th key={index} className="capitalize text-base text-center">
        {item}
    </th>
);

const renderLatestUserBody = (item, index) => (
    <tr key={index} className="text-sm text-center">
        <td>{item.lastName}</td>
        <td>{item.firstName}</td>
        <td>{item.email}</td>
    </tr>
);

const latestDocumentHead = ["Tên", "Giới thiệu"];

const renderLatestDocumentHead = (item, index) => (
    <th key={index} className="text-base text-center">
        {item}
    </th>
);

const renderLatestDocumentBody = (item, index) => (
    <tr key={index} className="text-sm text-justify">
        <td className="max-w-xs">
            <p className="truncate whitespace-normal leading-6 line-clamp-2">{item.docName}</p>
        </td>
        <td className="max-w-xl">
            <p className="truncate whitespace-normal leading-6 line-clamp-2">{item.docIntroduction}</p>
        </td>
    </tr>
);

const ManagerDashboard = () => {
    const themeReducer = useSelector((state) => state.ThemeReducer.mode);

    usePrivateAxios();

    // const user = useSelector((state) => state.LoginReducer.user);
    const user = JSON.parse(sessionStorage.getItem("profile"));

    const [totalDocuments, setTotalDocuments] = useState(0);
    const [totalPendingDocuments, setTotalPendingDocuments] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [latestUsers, setLatestUsers] = useState([]);
    const [latestDocuments, setLatestDocuments] = useState([]);

    const statusCards = [
        {
            icon: "bx bx-user",
            count: totalUsers,
            title: "Người dùng",
            link: "/manager/users",
        },
        {
            icon: "bx bx-cart",
            count: 0,
            title: "Daily visits",
            link: "#",
        },
        {
            icon: "bx bx-file",
            count: totalDocuments,
            title: "Tài liệu",
            link: "/manager/documents",
        },
        {
            icon: "bx bx-time-five",
            count: totalPendingDocuments,
            title: "Đang chờ duyệt",
            link: "/manager/documents/pending",
        },
    ];

    useEffect(() => {
        getStatistics();
        getLatestUserList();
        getLatestDocumentList();
    }, []);

    useEffect(() => {
        statusCards[0].count = totalUsers;
        statusCards[2].count = totalDocuments;
        statusCards[3].count = totalPendingDocuments;
    }, [totalDocuments, totalPendingDocuments, totalUsers]);

    const getStatistics = async () => {
        try {
            const response = await getGeneralStatisticsForManager();

            if (response.status === 200) {
                setTotalDocuments(response.data.totalDocuments);
                setTotalPendingDocuments(response.data.totalPendingDocuments);
                setTotalUsers(response.data.totalUsers);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestUserList = async () => {
        try {
            const response = await getLatestUsersByOrganization(user.organization.slug);

            if (response.status === 200) {
                setLatestUsers(response.data.content);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestDocumentList = async () => {
        try {
            const response = await getLatestDocumentsByOrganization(user.organization.slug);

            if (response.status === 200) {
                setLatestDocuments(response.data.content);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {statusCards.map((item, index) => (
                            <div className="col-6" key={index}>
                                <StatusCard icon={item.icon} count={item.count} title={item.title} link={item.link} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={
                                themeReducer === "theme-mode-dark"
                                    ? {
                                          ...chartOptions.options,
                                          theme: { mode: "dark" },
                                      }
                                    : {
                                          ...chartOptions.options,
                                          theme: { mode: "light" },
                                      }
                            }
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Người dùng mới nhất</h3>
                        </div>
                        <div className="card__body overflow-x-auto">
                            <Table headData={latestUserHead} renderHead={(item, index) => renderLatestUserHead(item, index)} bodyData={latestUsers} renderBody={(item, index) => renderLatestUserBody(item, index)} />
                        </div>
                        <div className="card__footer">
                            <Link to="/manager/users/latest" className="font-bold">
                                Xem tất cả
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Tài liệu mới nhất</h3>
                        </div>
                        <div className="card__body overflow-x-auto">
                            <Table headData={latestDocumentHead} renderHead={(item, index) => renderLatestDocumentHead(item, index)} bodyData={latestDocuments} renderBody={(item, index) => renderLatestDocumentBody(item, index)} />
                        </div>
                        <div className="card__footer">
                            <Link to="/manager/documents/latest" className="font-bold">
                                Xem tất cả
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
