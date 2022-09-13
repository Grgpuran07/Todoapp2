import React, { useState } from "react";
import Inputform from "../../components/Inputform/Inputform";
import Personalinfo from "../../components/Personalinfo/Personalinfo";
import "./Pagetwo.css";
import { useSelector } from "react-redux/es/exports";
import Filterform from "../../components/filterform/Filterform";

const Pagetwo = () => {
  const initialDatas = useSelector((state) => state.data.totalUsers);
  const [filteritem, setFilteritem] = useState(initialDatas);

  let renderPersonalinfo = "";
  if (filteritem.length !== 0) {
    renderPersonalinfo = filteritem.map((item) => (
      <Personalinfo key={item.id} {...item} />
    ));
  } else {
    renderPersonalinfo = "There are no any usersInfo..Please Add";
  }
  return (
    <div className="Pagetwo">
       <h3>Using Functional Component.</h3>
      <Inputform />
      <Filterform setFilteritem={setFilteritem} />
      {renderPersonalinfo}
    </div>
  );
};

export default Pagetwo;
