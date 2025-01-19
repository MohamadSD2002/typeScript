import { columnsList } from "@/app/users/columnsList";
import { DataItem } from "@/utils/interface";

interface TableProps {
  data: DataItem[];
}

const MainTable: React.FC<TableProps> = ({ data }) => {

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className="p-5">
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-[#f4f4f4]">
          <tr>
            {columnsList.map((col) => (
              <th key={col.id} className="px-6 py-3">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-50`}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900 text-center">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 text-center">
                {item.age}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 text-center">
                {item.address}
              </td>
              <td className="px-6 py-4 text-sm text-red-600 text-center">
                <button className="font-medium text-red-600 text-center">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
