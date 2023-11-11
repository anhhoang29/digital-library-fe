import React from "react";

import Table from "../../components/admin/table/Table";

import customerList from "../../assets/JsonData/customers-list.json";
import ActionButton from "../../components/admin/action-button/ActionButton";

const customerTableHead = ["", "name", "email", "phone", "total orders", "total spend", "location", "actions"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
        <td>
            <div>
                <button
                    type="button"
                    class="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="bx bxs-message-square-edit text-2xl"></i>
                </button>
                <button
                    type="button"
                    class="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="bx bxs-message-square-x text-2xl"></i>
                </button>

                <button
                    type="button"
                    class="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <i class="bx bxs-show text-2xl"></i>
                </button>
                <ActionButton onClick={() => {}} icon="bx bxs-edit-alt" />
            </div>
        </td>
    </tr>
);

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table limit="10" headData={customerTableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={customerList} renderBody={(item, index) => renderBody(item, index)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
