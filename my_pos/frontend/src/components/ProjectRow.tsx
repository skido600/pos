import { FiEdit, FiTrash, FiMoreVertical } from "react-icons/fi";
import type { Project } from "./type";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  const isLowStock = project.avaliable <= 3;

  return (
    <tr className="border-b border-gray-200 h-14">
      <td className="px-6 py-3 border border-gray-200">{project.id}</td>

      <td className="px-6 py-3 border border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={project.avatar}
            alt={project.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{project.name}</span>
        </div>
      </td>

      <td className="px-6 py-3 border border-gray-200">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isLowStock
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}>
          {isLowStock
            ? `⚠️ About to Finish (${project.avaliable})`
            : `Available (${project.avaliable})`}
        </span>
      </td>

      <td className="px-6 py-3 border border-gray-200">
        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
          Sales {project.Sales}
        </span>
      </td>

      <td className="px-6 py-3 border border-gray-200 text-sm text-gray-600">
        {project.serial_number}
      </td>

      <td className="px-6 py-3 border border-gray-200 text-sm text-blue-600 underline truncate max-w-[200px]">
        {project.qrcode}
      </td>

      <td className="px-6 py-3 border border-gray-200">
        <div className="flex items-center gap-3 justify-end text-gray-600">
          <button title="Edit">
            <FiEdit />
          </button>
          <button title="Delete">
            <FiTrash />
          </button>
          <button title="More">
            <FiMoreVertical />
          </button>
        </div>
      </td>
    </tr>
  );
}
