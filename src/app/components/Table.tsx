"use client";

import React, { useState } from "react";

const data = [
  {
    maKH: "EA0988765",
    hoTen: "Nguyễn Văn A",
    sdt: "0368585812",
    email: "Nguyenthithanh1209@gmail.com",
    nguoiTiepThi: "Nguyễn Văn B",
    nguon: "Website",
    ghiChu: "Gọi tư vấn ngoài giờ hành chính",
    ngayTao: "06/09/2023",
  },
  {
    maKH: "EA0988765",
    hoTen: "Nguyễn Văn A",
    sdt: "0368585812",
    email: "Nguyenthithanh1209@gmail.com",
    nguoiTiepThi: "Nguyễn Văn C",
    nguon: "Facebook Ads",
    ghiChu: "Gọi tư vấn ngoài giờ hành chính",
    ngayTao: "06/09/2023",
  },
  {
    maKH: "EA0988765",
    hoTen: "Nguyễn Văn A",
    sdt: "0368585812",
    email: "Nguyenthithanh1209@gmail.com",
    nguoiTiepThi: "Nguyễn Văn C",
    nguon: "Trực tiếp",
    ghiChu: "Gọi tư vấn ngoài giờ hành chính",
    ngayTao: "06/09/2023",
  },
];

const Table = () => {
  const totalRows = 300;
  const paddedData = [...data];

  while (paddedData.length < totalRows) {
    paddedData.push({
      maKH: "",
      hoTen: "",
      sdt: "",
      email: "",
      nguoiTiepThi: "",
      nguon: "",
      ghiChu: "",
      ngayTao: "",
    });
  }

  const rowsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(paddedData.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = paddedData.slice(indexOfFirstRow, indexOfLastRow);

  const changePage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPagination = () => {
    const pagination = [];

    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`px-3 py-1 mx-1 rounded-full ${
            i === currentPage
              ? "bg-orange-400 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <div className="relative rounded-xl overflow-auto p-5">
      <div className="shadow-sm overflow-scroll max-h-[650px] my-8 border border-[#BDBDBD] rounded-t-3xl">
        <table className="border-collapse table-auto w-full text-sm">
          <thead className="bg-[#F2F2F2] font-semibold text-left sticky top-0">
            <tr>
              <th className="border-b p-4 pl-8 pb-3 ">#</th>
              <th className="border-b p-4 pb-3 ">Mã KH</th>
              <th className="border-b p-4 pb-3 ">Họ và tên</th>
              <th className="border-b p-4 pb-3 ">SĐT</th>
              <th className="border-b p-4 pb-3 ">Email</th>
              <th className="border-b p-4 pb-3 ">Người tiếp thị</th>
              <th className="border-b p-4 pb-3 ">Nguồn</th>
              <th className="border-b p-4 pb-3 ">Ghi chú</th>
              <th className="border-b p-4 pb-3 ">Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td className="border-b p-4 pl-8">{index + 1}</td>
                <td className="border-b p-4">{row.maKH}</td>
                <td className="border-b p-4">{row.hoTen}</td>
                <td className="border-b p-4">{row.sdt}</td>
                <td className="border-b p-4">{row.email}</td>
                <td className="border-b p-4">{row.nguoiTiepThi}</td>
                <td className="border-b p-4">{row.nguon}</td>
                <td className="border-b p-4">{row.ghiChu}</td>
                <td className="border-b p-4">{row.ngayTao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4 px-5">
        <div>Hiển thị 1-50/{data.length} hợp đồng</div>
        <div className="flex">
          <button
            onClick={() => changePage(currentPage - 1)}
            className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-full"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {renderPagination()}
          <button
            onClick={() => changePage(currentPage + 1)}
            className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-full"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
