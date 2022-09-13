import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Singelinput from "../Inputform/Singelinput";

const Filterform = ({ setFilteritem }) => {
  const [search, setSearch] = useState("");
  const alldatas = useSelector((state) => state.data.totalUsers);

  useEffect(() => {
    setFilteritem(alldatas);
  }, [alldatas]);

  useEffect(() => {
    setFilteritem(
      [...alldatas].filter((item) => {
        return `${item.name}${item.address}${item.contactno}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <div>
      <Singelinput
        value={search}
        handlechange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filterform;
