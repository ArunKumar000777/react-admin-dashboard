import "./singlePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import List from "../list/List";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const SinglePage = () => {
    return (
        <div className="singlePage">
            <Sidebar />
            <div className="singlePageContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">jane doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email :</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone :</span>
                                    <span className="itemValue">+91056495</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address :</span>
                                    <span className="itemValue"> kerala , kannur, pin:670331</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country :</span>
                                    <span className="itemValue"> India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title='User Spending (Last 6 Months)'/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last transactions</h1>
                    <Table/>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
