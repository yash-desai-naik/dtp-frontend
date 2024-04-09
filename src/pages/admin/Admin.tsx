import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FaSearch, FaUser } from 'react-icons/fa';

function Admin() {
  return (
    <div>
      <div className="flex items-center justify-between bg-gradient-to-r from-sky-200 to-blue-700 py-10">
        <h1 className="text-lg font-bold text-white px-4">ADMIN</h1>
        <div className="flex items-center space-x-2">
          <div className="relative rounded-full bg-white">
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 ml-2 text-gray-500" />
            <Input className="pl-8 bg-transparent rounded-full focus:outline-none" placeholder="Search..." />
          </div>
          <a href="/profile" className="px-2">
            <FaUser className="text-white text-xl cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 py-5">
        <b>User List</b>
        <div className="px-10">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Add User
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-slate-200">
          <TableRow>
            <TableHead>USERNAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>DEPARTMENT</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pradip</TableCell>
            <TableCell>pradip@gmail.com</TableCell>
            <TableCell>active</TableCell>
            <TableCell>financial</TableCell>
            <TableCell>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                Deactivate
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Admin;
