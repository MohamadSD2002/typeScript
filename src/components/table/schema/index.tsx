import MainTable from "@/components/common/table";
import { getData } from "@/utils/services/users";
import React from "react";



const UsersSchema: React.FC = async () => {
  const data = await getData()

  return (
    <div className="p-5">
      <MainTable data={data ?? []} />
    </div>
  );
};

export default UsersSchema;
