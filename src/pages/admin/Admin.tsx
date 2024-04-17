import CustomButton from '@/components/CustomButton';
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import AddUser from "@/layouts/AddUser";
import { useState } from 'react';

function Admin() {

  const [users, setUsers] = useState([
    { username: "PRADIP", email: "pradip@123", status: "active", department: "Any department" },
    { username: "CHIRAG", email: "Chirag@123", status: "active", department: "Other department" },
    { username: "3", email: "3@123", status: "active", department: "Any department" },
    { username: "4", email: "pradip@123", status: "active", department: "Any department" },
    { username: "5", email: "pradip@123", status: "active", department: "Any department" },
    { username: "6", email: "pradip@123", status: "active", department: "Any department" },
    { username: "7", email: "pradip@123", status: "active", department: "Any department" },
    { username: "8", email: "pradip@123", status: "active", department: "Any department" },
    { username: "9", email: "pradip@123", status: "active", department: "Any department" },
    { username: "10", email: "pradip@123", status: "active", department: "Any department" },
    { username: "11", email: "pradip@123", status: "active", department: "Any department" },
    { username: "12", email: "pradip@123", status: "active", department: "Any department" },
    { username: "13", email: "pradip@123", status: "active", department: "Any department" },
    { username: "14", email: "pradip@123", status: "active", department: "Any department" },
    { username: "15", email: "pradip@123", status: "active", department: "Any department" },
    { username: "16", email: "pradip@123", status: "active", department: "Any department" },
    { username: "17", email: "pradip@123", status: "active", department: "Any department" },
    { username: "18", email: "pradip@123", status: "active", department: "Any department" },
    { username: "19", email: "pradip@123", status: "active", department: "Any department" },
    { username: "20", email: "pradip@123", status: "active", department: "Any department" },
    { username: "21", email: "pradip@123", status: "active", department: "Any department" },
    { username: "22", email: "pradip@123", status: "active", department: "Any department" },
    { username: "23", email: "pradip@123", status: "active", department: "Any department" },
  ]);

  const toggleStatus = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = updatedUsers[index].status === "active" ? "inactive" : "active";
    setUsers(updatedUsers);
  };

  const tableHeaders = ["USERNAME", "EMAIL", "STATUS", "DEPARTMENT", "ACTION"];

  const tableData = users.map((user, index) => ([
    user.username,
    user.email,
    user.status,
    user.department,

    <CustomButton text={user.status === "active" ? "Deactivate" : "Activate"}
                  key={index}
                  onClick={() => toggleStatus(index)}
                  cls="bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold rounded transition-colors duration-300 w-24 text-center py-2 px-4"
    />
  ]));

  return (
    <div>
      <div>
        <PageHeader title="ADMIN" />
      </div>
      <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
        <div className="flex justify-between items-center mb-1 py-4  bg-white">
          <b className="text-lg px-2">Add User</b>
          <div className='px-10'>
            <AddUser buttonName="Add User" />
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div>
          <CustomTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
