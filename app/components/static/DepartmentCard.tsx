interface DepartmentCardProps {
    deptname: string;
  }
  

const DepartmentCard: React.FC<DepartmentCardProps> = ({ deptname }) => {

    return (
        <div className="inline-block bg-white text-gray-700 py-6 px-8 rounded-xl shadow-md m-2 transform hover:scale-105 transition-transform duration-300 hover:font-semibold hover:text-[#C71585] duration-200">
            <button className="text-lg ">{deptname}</button>
        </div>
    )
}

export default DepartmentCard

