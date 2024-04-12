import AddOrganization from "@/components/AddOrganization";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";

function Organization() {

  const tableHeaders = ["ORGANIZATION NAME", "ORGANIZATION TYPE"];
    const tableData = [
        ["Product 1", "pradip"],
        ["Product 1", "pradip"],
        ["Product 1", "pradip"],
    ];

  return (
    <div>
      <div>
        <PageHeader title="ORGANIZATIONS" />
      </div>
      <div className="flex justify-between items-center mb-4 py-5 px-10">
        <b>Organization List</b>
        <div>
          <AddOrganization buttonName="Add Organization" />
        </div>
      </div>
      <div>
        <CustomTable headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
}

export default Organization;
