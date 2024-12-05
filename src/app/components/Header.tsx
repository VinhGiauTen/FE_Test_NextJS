"use client";

import img from "@/app/Images/Rectangle 312.png";
import logo from "@/app/Images/Vector.svg";
import filter from "@/app/Images/Vector (1).svg";
import Image from "next/image";
import { useState } from "react";
import CustomerForm from "@/app/components/CustomerForm";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="flex p-5 justify-between">
      <div className="space-y-5">
        <div className="flex items-center space-x-1">
          <Image src={logo} alt="" />
          <div className="text-2xl text-[#181B22]">Quản lý khách hàng</div>
        </div>
        <div className="flex space-x-5 items-center">
          <input
            placeholder="Tên, SĐT, Email"
            className="placeholder-[#C4C4C4] w-[300px] border border-slate-900 p-2 px-5 rounded text-sm"
          />
          <Image
            src={filter}
            alt=""
            className="border-slate-900 border rounded-full p-1 h-[30px] w-[30px] "
          />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex space-x-3 items-center">
          <div className="text-right text-sm">
            Mrs Conan <br /> Nhân viên kinh doanh
          </div>
          <Image src={img} alt="" />
        </div>
        <div className="text-right">
          <button
            onClick={handleToggle}
            className="p-1 px-3 bg-[#BD8306] text-white rounded-lg border border-[#BD8306] hover:bg-white hover:text-[#BD8306] transition"
          >
            Thêm khách hàng
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleToggle}
          ></div>

          <CustomerForm isOpen={isOpen} onToggle={handleToggle} />
        </>
      )}
    </div>
  );
};

export default Header;
