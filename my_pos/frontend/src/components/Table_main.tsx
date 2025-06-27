import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { FiEdit, FiTrash } from "react-icons/fi";
import type { Project } from "./type";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Table_main() {
  const [search, setSearch] = useState("");

  const mockProjects: Project[] = [
    {
      id: "#3065",
      name: "Amena Sabuwala",
      Sales: "45",
      avaliable: 56,
      serial_number: 2437155252,
      qrcode: "244266efdfh78373737",
      avatar: "https://i.pravatar.cc/24?img=1",
    },
    {
      id: "#3066",
      name: "Ifeoluwa Johnson",
      Sales: "22",
      avaliable: 3,
      serial_number: 2637456262,
      qrcode: "338812ddfeu29292929",
      avatar: "https://i.pravatar.cc/24?img=2",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
    {
      id: "#3067",
      name: "Chinedu Okafor",
      Sales: "74",
      avaliable: 744,
      serial_number: 2237155231,
      qrcode: "992188dlksj329393",
      avatar: "https://i.pravatar.cc/24?img=3",
    },
  ];

  const filteredProjects = mockProjects.filter((project) => {
    return (
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.serial_number.toString().includes(search)
    );
  });

  return (
    <div className="w-full overflow-x-auto p-4 rounded shadow space-y-4">
      <Input
        type="text"
        placeholder="Search by name or serial number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
      />

      <Table className="min-w-[900px]">
        <TableCaption>A list of your stock items.</TableCaption>
        <TableHeader>
          <TableRow className=" py-8">
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Serial No</TableHead>
            <TableHead>QR Code</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const isLowStock = project.avaliable <= 3;

              return (
                <TableRow key={index}>
                  <TableCell>{project.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={project.avatar}
                        alt={project.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{project.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isLowStock
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}>
                      {isLowStock
                        ? `⚠️ Low (${project.avaliable})`
                        : `Available (${project.avaliable})`}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      Sales {project.Sales}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm dark:text-white text-gray-600">
                    {project.serial_number}
                  </TableCell>
                  <TableCell
                    className="text-sm text-blue-600 underline truncate max-w-[200px]"
                    title={project.qrcode}>
                    {project.qrcode}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 justify-end text-gray-600">
                      <Button
                        title="Edit"
                        className="hover:text-blue-600 transition cursor-pointer">
                        <FiEdit />
                      </Button>
                      <Button
                        title="Delete"
                        className="hover:text-red-600 transition cursor-pointer">
                        <FiTrash />
                      </Button>
                      {/* <button
                        title="More"
                        className="hover:text-gray-800 transition cursor-pointer">
                        <FiMoreVertical />
                      </button> */}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-sm py-6">
                No matching results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Table_main;
