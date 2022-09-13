import React from "react";

const Singelinput = ({ id, name, value, handlechange }) => {
  //   const Changed = (e) => {
  //     console.log(e.target.value);
  //     setUserinfo({
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  return (
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={handlechange}
    />
  );
};

export default Singelinput;
