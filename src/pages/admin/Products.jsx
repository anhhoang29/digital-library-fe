import React from "react";
import { useState } from "react";
import Select from "../../components/admin/select/Select";

const Products = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const options = [
        { value: 1, name: "Option 1" },
        { value: 2, name: "Option 2" },
        { value: 3, name: "Option 3" },
    ];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="grid place-items-center">
            <h2 className="page-header">customers</h2>
            <div className="row w-2/3">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
