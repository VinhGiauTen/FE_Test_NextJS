import { useState } from "react";

const CustomerCareTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      date: "28/04/2022",
      result: "Khách hàng hẹn gọi lại sau",
      status: "Gọi lại lần sau",
    },
    {
      id: 2,
      date: "30/04/2022",
      result: "Khách yêu cầu trải nghiệm",
      status: "Yêu cầu trải nghiệm",
    },
  ]);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, date: "", result: "", status: "" };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (
    id: number,
    field: keyof (typeof rows)[0],
    value: string
  ) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className="p-5">
      <h3 className="text-lg font-bold mb-4">Thông tin chăm sóc khách hàng</h3>
      <div className="border rounded-lg">
        <table className="table-auto w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Lần</th>
              <th className="border px-4 py-2">Ngày</th>
              <th className="border px-4 py-2">Kết quả chăm sóc</th>
              <th className="border px-4 py-2">Cập nhật trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2">
                  <input
                    type="date"
                    className="border rounded w-full px-2 py-1"
                    value={row.date}
                    onChange={(e) =>
                      handleInputChange(row.id, "date", e.target.value)
                    }
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="border rounded w-full px-2 py-1"
                    placeholder="Nhập kết quả"
                    value={row.result}
                    onChange={(e) =>
                      handleInputChange(row.id, "result", e.target.value)
                    }
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    className="border rounded w-full px-2 py-1"
                    value={row.status}
                    onChange={(e) =>
                      handleInputChange(row.id, "status", e.target.value)
                    }
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value="Gọi lại lần sau">Gọi lại lần sau</option>
                    <option value="Yêu cầu trải nghiệm">
                      Yêu cầu trải nghiệm
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="flex items-center justify-center p-4 text-[#BD8306] cursor-pointer"
          onClick={handleAddRow}
        >
          <span className="border border-[#BD8306] rounded-full w-5 h-5 mr-2 text-center font-bold">
            +
          </span>
          Thêm
        </div>
      </div>
    </div>
  );
};

export default CustomerCareTable;
