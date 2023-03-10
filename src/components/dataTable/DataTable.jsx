import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColomns, userRows } from "../../dataTableSource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {
    const [data, setData] = useState(userRows);
    const location = useLocation();
    const pathName = location.pathname;
    // console.log(location.pathname);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const actionColumn = [
        {
            fild: "action",
            headerName: "Action",
            width: "200",
            renderCell: (params) => {
                return (
                    <div className="cellAction" key={params.row.id}>
                        <Link to={"/users/test"} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="dataTable">
            <div className="dataTableTitle">
                {pathName === "/products" ? "Add New Product" : "Add New User"}
                <Link to={pathName === "/products" ? "/products/new" : "/users/new"} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColomns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                key={data.id}
            />
        </div>
    );
};

export default DataTable;
