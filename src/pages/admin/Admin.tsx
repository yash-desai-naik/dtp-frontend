import { useState } from 'react';
import AddUser from "@/components/AddUser";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';

function Admin() {

  const [users, setUsers] = useState([
    { username: "PRADIP", email: "pradip@123", status: "active", department: "Any department" },
    { username: "CHIRAG", email: "Chirag@123", status: "inactive", department: "Other department" },
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
    <Button
      key={index}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      onClick={() => toggleStatus(index)}
    >
      {user.status === "active" ? "Deactivate" : "Activate"}
    </Button>
  ]));

  return (
    <div>
      <div>
        <PageHeader title="ADMIN" />
      </div>
      <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
        <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
          <b>Add Lot</b>
          <div>
            <AddUser buttonName="Add User" />
          </div>
        </div>
        <div>
          <CustomTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
