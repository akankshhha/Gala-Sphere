interface DepartmentCardProps {
    deptname: string;
  }
  

const DepartmentCard: React.FC<DepartmentCardProps> = ({ deptname }) => {

    return (
        <div className="inline-block bg-gray-200 text-gray-800 py-2 px-4 rounded-md shadow-sm m-2">
            <button className="text-sm font-medium">{deptname}</button>
        </div>
    )
}

export default DepartmentCard

