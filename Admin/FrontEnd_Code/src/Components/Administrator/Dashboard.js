/** @format */

import StatusCard from "./DashBroads/StatusCard";
import PageVisitsCard from "./DashBroads/PageVisitsCard";
import TrafficCard from "./DashBroads/TrafficCard";
import { getAllAccount } from "../../Features/AcountSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const admin = JSON.parse(localStorage.getItem("Admin"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DangXuat = () => {
    // dispatch(logoutAdmin());
    alert("Logout Admin thành công");
    navigate("/");
  };

  return (
    <div className=" bg-gradient-to-r from-[#fde4be] to-[#f5a9dc] rounded-xl mb-[30px] mt-[-20px]">
      <div className="text-[#fc3939] font-[500] text-[20px] mr-[30px] pt-[10px] text-right">
        Nhân viên: {admin?.UserName}
        <p>
          <button className="btn btn-success" onClick={DangXuat}>
            Đăng xuất
          </button>
        </p>
      </div>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40 text-center text-[40px] text-[#4e04f8] pt-[30px] font-mono font-[700]">
        vnkfood
      </div>
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <TrafficCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
