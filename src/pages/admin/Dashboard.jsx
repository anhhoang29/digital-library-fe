import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../../components/admin/status-card/StatusCard";

import Table from "../../components/admin/table/Table";

import { getLatestDocuments } from "../../api/admin/documentAPI";
import { getGeneralStatistics } from "../../api/admin/statisticsAPI";
import { getLatestUsers } from "../../api/admin/userAPI";
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

const latestUserHead = ["Họ", "Tên", "Trường"];

const renderLatestUserHead = (item, index) => (
    <th key={index} className="capitalize text-base">
        {item}
    </th>
);

const renderLatestUserBody = (item, index) => (
    <tr key={index} className="capitalize text-base">
        <td>{item.lastName}</td>
        <td>{item.firstName}</td>
        <td>{item?.organization?.orgName}</td>
    </tr>
);

const latestDocumentHead = ["Tên", "Lĩnh vực", "Danh mục", "Trường", "Trạng thái"];

// const orderStatus = {
//     shipping: "primary",
//     pending: "warning",
//     paid: "success",
//     refund: "danger",
// };

const renderLatestDocumentHead = (item, index) => (
    <th key={index} className="capitalize text-base">
        {item}
    </th>
);

const renderLatestDocumentBody = (item, index) => (
    <tr key={index} className="capitalize text-base">
        <td>{item.docName}</td>
        <td>{item?.field?.fieldName}</td>
        <td>{item?.category?.categoryName}</td>
        <td>{item?.organization?.orgName}</td>
        <td>{/* <Badge type={orderStatus[item.status]} content={item.status} /> */}</td>
    </tr>
);

const Dashboard = () => {
    const themeReducer = useSelector((state) => state.ThemeReducer.mode);

    usePrivateAxios();

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
            link: "/admin/users",
        },
        {
            icon: "bx bx-cart",
            count: 0,
            title: "Daily visits",
            link: "#"
        },
        {
            icon: "bx bx-file",
            count: totalDocuments,
            title: "Tài liệu",
            link: "/admin/documents",
        },
        {
            icon: "bx bx-time-five",
            count: totalPendingDocuments,
            title: "Đang chờ duyệt",
            link: "/admin/documents/pending",
        },
    ];

    useEffect(() => {
        getStatistics();
        getLatestUserList();
        getLatestDocumentList();
    }, []);

    useEffect(
        () => {
            statusCards[0].count = totalUsers;
            statusCards[2].count = totalDocuments;
            statusCards[3].count = totalPendingDocuments;
        },
        totalDocuments,
        totalPendingDocuments,
        totalUsers,
    );

    const getStatistics = async () => {
        try {
            const response = await getGeneralStatistics();

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
            const response = await getLatestUsers();

            if (response.status === 200) {
                setLatestUsers(response.data.content);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestDocumentList = async () => {
        try {
            const response = await getLatestDocuments();

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
                                <StatusCard icon={item.icon} count={item.count} title={item.title} link={item.link}/>
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
                            <Link to="/admin/users/latest" className="font-bold">
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
                            <Link to="/admin/documents/latest" className="font-bold">
                                Xem tất cả
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
