import React from "react";

const UITable = ({ head,children }) => {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr className="bg-gray-50 !h-[40px]">
          {head.length > 0 &&
            head.map((th,i) => {
              return (
                <th key={i} className="px-[5px] py-[5px] border ">
                  {th}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default UITable;
