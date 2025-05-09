import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import {
  Create_Seller,
  Get_All_Sellers,
  Get_All_Users,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "../BasicDetails/AddThingsModal";

function Rate() {
  const [users, setUsers] = useState([]);
  console.log(users);
  //   const [inVitrin, setInVitrin] = useState([]);
  const [isVitrin, setIsVitrin] = useState(false);
  const [sellers, setSellers] = useState([]);
  console.log(sellers);
  const [isModal, setIsModal] = useState(false);
  const [share_Benefit_Percent, setShare_Benefit_Percent] = useState("");
  const [address, setAddress] = useState("");
  const [applicationUserId, setApplicationUserId] = useState("");
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    share_Benefit_Percent,
    address,
    applicationUserId,
  };
  const fetchData = async () => {
    const data = await Get_All_Users();
    if (data) {
      setUsers(data);
    }
  };
  useEffect(() => {
    fetchData();
    Get_All_Sellers(setSellers);
  }, []);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => Create_Seller(data, setIsModal)}
          title="فروشنده"
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setAddress(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="آدرس"
          />
          <div className=" flex items-center w-full gap-2">
            <h5>درصد سود:</h5>
            <select
              onChange={(e) => setShare_Benefit_Percent(e.target.value)}
              className=" border"
            >
              <option value="1">1%</option>
              <option value="1.5">1.5%</option>
              <option value="2">2%</option>
              <option value="2.5">2.5%</option>
              <option value="3">3%</option>

              <option value="3.5">3.5%</option>
              <option value="4">4%</option>
              <option value="4.5">4.5%</option>
              <option value="5">5%</option>
            </select>
          </div>
        </AddThingsModal>
      )}
      <div className=" w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full h-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">نرخ لحظه ای</h5>
            <div className=" w-full gap-5 h-full flex justify-center flex-col items-center">
              <div className=" w-[90%] gap-5 flex justify-center items-center ">
                <div className="  flex gap-2 items-center">
                  <h5>نرخ لحظه ای طلا:</h5>
                  <input className=" p-2 outline-none border rounded" />
                </div>
                <div className=" gap-2  flex items-center">
                  <h5>نرخ لحظه ای دلار:</h5>
                  <input className=" p-2 outline-none border rounded" />
                </div>
                <div className="  gap-2 flex items-center">
                  <h5>نرخ لحظه ای سکه:</h5>
                  <input className=" p-2 outline-none border rounded" />
                </div>
              </div>
              <button className=" w-1/5 rounded bg-teal-700 text-white p-2">ثبت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
