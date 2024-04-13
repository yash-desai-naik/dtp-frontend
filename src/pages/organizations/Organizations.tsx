import AddOrganization from "@/components/AddOrganization";
import CustomTable from "@/components/CustomTable";
import Footer from "@/components/Footer";
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
        <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
          <b>Add Organization</b>
          <div>
            <AddOrganization buttonName="Add Organization" />
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

export default Organization;
