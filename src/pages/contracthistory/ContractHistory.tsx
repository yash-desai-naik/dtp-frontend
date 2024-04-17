import CustomButton from "@/components/CustomButton";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";

function ContractHistory() {

  return (
    <div>
      <div>
        <PageHeader title="CONTRACT HISTORY" />
      </div>
      <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
        <div className="flex justify-between items-center mb-1 py-4 bg-white">
          <b className="text-lg px-10">Contract List</b>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 px-10">
          <Input type="" placeholder="Enter Contract ID" className="w-72" />
          <CustomButton text="Show History" />
        </div>
      </div>
    </div>
  );
}

export default ContractHistory;
