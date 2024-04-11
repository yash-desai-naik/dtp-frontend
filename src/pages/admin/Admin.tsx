import AddLotDialog from "@/components/AddLotDialog";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

function Admin() {

  const tableHeaders = ["USERNAME", "EMAIL", "STATUS", "DEPARTMENT", "ACTION"];
  const tableData = [
    ["PRADIP", "pradip@123", "active", "Any department", (
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
        Deactivate
      </Button>
    )]
  ];

  return (
    <div>
      <div>
        <PageHeader title="ADMIN" />
      </div>
      <div className="flex justify-between items-center mb-1 py-4 px-10">
        <b>User List</b>
        <div>
          <AddLotDialog buttonName="Add User" />
        </div>
      </div>
      <div>
        <CustomTable headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
}

export default Admin;
