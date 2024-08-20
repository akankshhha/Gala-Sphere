interface DepartmentCardProps {
    deptname: string;
  }
  

const DepartmentCard: React.FC<DepartmentCardProps> = ({ deptname }) => {

    return (
        <div className="inline-block bg-gray-200 text-gray-700 py-6 px-8 rounded-xl shadow-sm m-2">
            <button className="text-lg font-medium">{deptname}</button>
        </div>
    )
}

export default DepartmentCard

