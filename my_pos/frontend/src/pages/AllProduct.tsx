// import ProjectTable from "../components/ProjectTable";
import Table_main from "../components/Table_main";
// import type { Project } from "../components/type";

// const mockProjects: Project[] = [
//   {
//     id: "#3065",
//     name: "Amena Sabuwala",
//     Sales: "45",
//     avaliable: 56,
//     serial_number: 2437155252,
//     qrcode: "244266efdfh78373737",
//     avatar: "https://i.pravatar.cc/24?img=1",
//   },
//   {
//     id: "#3066",
//     name: "Ifeoluwa Johnson",
//     Sales: "22",
//     avaliable: 3,
//     serial_number: 2637456262,
//     qrcode: "338812ddfeu29292929",
//     avatar: "https://i.pravatar.cc/24?img=2",
//   },
//   {
//     id: "#3067",
//     name: "Chinedu Okafor",
//     Sales: "74",
//     avaliable: 744,
//     serial_number: 2237155231,
//     qrcode: "992188dlksj329393",
//     avatar: "https://i.pravatar.cc/24?img=3",
//   },
// ];

function AllProduct() {
  return (
    <>
      <div className="p-4 sm:p-6 space-y-6">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold">📦 Stock</h1>
            <p className="text-gray-500 text-sm">Manage your stock</p>
          </div>
          {/* Optional future button */}
          {/* <AddProjectButton onClick={() => alert("Add Project Clicked")} /> */}
        </header>

        {/* Optional search component */}
        {/* <ProjectSearch onChange={() => {}} /> */}
      </div>
      <Table_main />
    </>
  );
}

export default AllProduct;
