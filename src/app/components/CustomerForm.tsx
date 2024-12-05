import CustomerCareTable from "@/app/components/CustomerCareTable";
import React, { useState } from "react";

interface CustomTableProps {
  isOpen: boolean;
  onToggle: () => void;
}

const CustomerForm = ({ onToggle }: CustomTableProps) => {
  const [customer, setCustomer] = useState({
    name: "Trần Trung Hiếu",
    gender: "Nam",
    dob: "2002-08-20",
    source: "Website",
    experience: "Yêu cầu trải nghiệm",
    phone: "0368585812",
    email: "nguyenthithanh1209@gmail.com",
    socialMedia: "Facebook",
    socialMediaLink: "http://www.facebook.com/...",
    address: {
      city: "Hà Nội",
      district: "Đống Đa",
      ward: "Láng Thượng",
      street: "số 32 Chùa Láng",
    },
    interestedProducts: ["Trị liệu dưỡng sinh", "Xoa bóp cổ vai gáy"],
    notes: "Cần tư vấn chi tiết về xoa bóp cổ vai gáy",
    careInfo: [
      {
        id: 1,
        date: "2022-04-28",
        result: "Khách hàng hẹn gọi lại sau",
        status: "Gọi lại lần sau",
      },
      {
        id: 2,
        date: "2022-04-30",
        result: "Khách yêu cầu trải nghiệm",
        status: "Yêu cầu trải nghiệm",
      },
    ],
    timeFrame: "8:00 - 9:00",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      address: { ...customer.address, [name]: value },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(customer);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md z-50 w-4/5 mx-auto overflow-scroll max-h-full mt-10 text-sm"
      >
        <div className="flex bg-[#BD8306] text-white justify-between p-2 items-center rounded-t-lg sticky top-0">
          <h2 className="text-xl font-bold">Tạo khách hàng</h2>
          <button
            onClick={onToggle}
            className="border border-white rounded p-1 w-7"
          >
            x
          </button>
        </div>
        <div className="grid grid-cols-3 gap-x-20 gap-y-5 p-5">
          <div>
            <label className="block mb-2">
              Họ tên khách hàng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex space-x-5 items-center">
            <label className="block">
              Giới tính <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={customer.gender === "Nam"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Nam
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={customer.gender === "Nữ"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Nữ
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Khác"
                  checked={customer.gender === "Khác"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Khác
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              value={customer.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">
                Nguồn khách hàng <span className="text-red-500">*</span>
              </label>
              <select
                name="source"
                value={customer.source}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Website">Website</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">
                Trạng thái <span className="text-red-500">*</span>
              </label>
              <select
                name="experience"
                value={customer.experience}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Yêu cầu trải nghiệm">Yêu cầu trải nghiệm</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="mx-5" />
        <p className="text-base px-5 pt-3 text-black">Thông tin liên hệ</p>
        <div className="grid grid-cols-3 gap-x-20 gap-y-8 p-5">
          <div>
            <label className="block mb-2">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Mạng xã hội</label>
              <select
                name="source"
                value={customer.socialMedia}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Website">Website</option>
                <option value="Facebook">Facebook</option>
                <option value="Tiktok">Tiktok</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block mb-2">Liên kết mạng xã hội</label>
              <input
                type="text"
                name="socialMediaLink"
                value={customer.socialMediaLink}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-base text-black">Thông tin chi tiết</p>
            <label className="block mb-2">
              Sản phẩm quan tâm <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F4FBF9] p-4 rounded-lg">
              <div className="flex flex-wrap gap-4 justify-start">
                <button className="px-4 py-2 rounded text-white bg-[#BD8306]">
                  Trị liệu dưỡng sinh
                </button>
                <button className="px-4 py-2 rounded text-white bg-[#BD8306]">
                  Xoa bóp cổ vai gáy
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-2">Ghi chú</label>
              <textarea
                name="notes"
                value={customer.notes}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block">Địa chỉ liên hệ</label>
            <select
              name="city"
              value={customer.address.city}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            >
              <option value="Hà Nội">Hà Nội</option>
            </select>
            <select
              name="district"
              value={customer.address.district}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            >
              <option value="Đống Đa">Đống Đa</option>
            </select>
            <select
              name="street"
              value={customer.address.street}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Láng Thượng">Láng Thượng</option>
            </select>
            <select
              name="ward"
              value={customer.address.ward}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Số 32 Chùa Láng">Số 32 Chùa Láng</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">
              Chọn khung giờ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="timeFrame"
              value={customer.timeFrame}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <hr className="mx-5" />
        <CustomerCareTable />
        <div className="flex justify-end mt-4 p-5 bg-[#FAFAFA] items-center">
          <button
            type="button"
            onClick={onToggle}
            className="px-4 py-2 text-[#BD8306] rounded mr-2"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#BD8306] text-white border border-[#BD8306] rounded hover:text-[#BD8306] hover:bg-white transition"
          >
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
