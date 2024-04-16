import AddOrganization from "@/layouts/AddOrganization";
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
        <PageHeader title="ORGANIZATION" />
      </div>
      <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
        <div className="flex justify-between items-center mb-1 py-4 bg-white">
          <b className="text-lg px-2">Add Organization</b>
          <div className="px-10">
            <AddOrganization buttonName="Add Organization" />
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

export default Organization;
