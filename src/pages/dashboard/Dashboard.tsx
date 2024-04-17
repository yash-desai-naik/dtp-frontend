import AddLotDialog from "@/layouts/AddLotDialog";
import CustomDropdownMenu from "@/components/CustomDropdownMenu";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import View from "@/layouts/View";
import Verify from "@/layouts/Verify";

function Dashboard() {

    const tableHeaders = ["PRODUCT", "VENDOR", "AGREEMENTTYPE", "DOCUMENT", "", ""];
    const tableData = [
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
        ["Product 1", "pradip", "My order", <CustomDropdownMenu />, <View buttonName="View" />, <Verify buttonName="Verify" title="Verify" />],
    ];

    return (
        <div>
          <div>
            <PageHeader title="DASHBOARD" />
          </div>
          <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
            <div className="flex justify-between items-center mb-1 py-4 bg-white">
              <b className="text-lg px-2">Add Lot</b>
              <div className="px-10">
                <AddLotDialog buttonName="Add Lot" />
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

export default Dashboard;
