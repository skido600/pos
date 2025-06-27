import ProjectRow from "./ProjectRow";
import type { Project } from "./type";

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="w-full overflow-x-auto p-4 bg-white rounded shadow">
      <table className="min-w-[800px] table-auto text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 text-sm">
          <tr className="h-14">
            <th className="px-6 py-3 border border-gray-200">ID</th>
            <th className="px-6 py-3 border border-gray-200 min-w-[150px]">
              Name
            </th>
            <th className="px-6 py-3 border border-gray-200">Available</th>
            <th className="px-6 py-3 border border-gray-200">Sales</th>
            <th className="px-6 py-3 border border-gray-200 min-w-[140px]">
              Serial No
            </th>
            <th className="px-6 py-3 border border-gray-200 min-w-[180px]">
              QR Code
            </th>
            <th className="px-6 py-3 border border-gray-200 text-right min-w-[100px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-700 text-sm">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
