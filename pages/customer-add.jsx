import MainLayout from "@/layout/MainLayout";
import axios from "axios";
import React,{useState} from "react";

const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const changeInputValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const addCustomer = (e)=>{
    e.preventDefault();
    const URL = "https://dummyjson.com/users/add";
    axios.post(URL,formData)
    .then(response=>{
        console.log(response);
    })
  }
  return (
    <MainLayout>
      <form onSubmit={addCustomer}>
        <div className="grid grid-flow-row grid-cols-2 gap-8 w-full">
          <div className="input">
            <div className="label mb-2">
              <label htmlFor="fname">First Name</label>
            </div>
            <input
              id="fname"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeInputValue}
              placeholder="First Name"
              className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"
            />
          </div>
          <div className="input">
            <div className="label mb-2">
              <label htmlFor="lname">Last Name</label>
            </div>
            <input
              id="lname"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeInputValue}
              placeholder="Last Name"
              className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"
            />
          </div>
          <div className="input">
            <div className="label mb-2">
              <label htmlFor="email">Email</label>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeInputValue}
              placeholder="Email"
              className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"
            />
          </div>
          <div className="input">
            <div className="label mb-2">
              <label htmlFor="phone">Contact</label>
            </div>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={changeInputValue}
              placeholder="Phone"
              className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"
            />
          </div>
          <div className="input">
            <div className="label mb-2">
              <label htmlFor="address">Address</label>
            </div>
            <input
              type="address"
              id="address"
              name="address"
              value={formData.address}
              onChange={changeInputValue}
              placeholder="Address"
              className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"
            />
          </div>
        </div>
        <div className="flex justify-end pt-[50px]">
          <div className="button text-center py-[10px] px-[40px] rounded-[5px] bg-[#025464] text-white font-medium text-[20px]">
            <button>Save</button>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default CustomerAdd;
