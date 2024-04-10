import AddLotDialog from "@/components/AddLotDialog";
import PageHeader from "@/components/PageHeader";

function Organization() {


  return (
    <div>
      <div>
        <PageHeader title="ORGANIZATIONS" />
      </div>
      <div className="flex justify-between items-center mb-4 py-5 px-10">
        <b>Organization List</b>
        <div>
          <AddLotDialog label="Add Organization" />
        </div>
      </div>
    </div>
  );
}

export default Organization;
