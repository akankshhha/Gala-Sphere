import Link from "next/link";
import { getDepartments } from "../api/route";
import DepartmentCard from '../components/static/DepartmentCard'

const Departments: React.FC = async () => {
    let departments = [];

    const data = await getDepartments();
    departments = data.departments || [];
    return (
        <div className="w-10/12 mx-auto">
            {/* <h1>Departments</h1> */}
            <div className="p-8 text-center">
                {departments && departments.map((department: any, index: number) => {
                    return (
                        <Link key={department.departmentId} href={`/departments/${department.departmentId}` } data-aos="fade-in" data-aos-duration={`${(index + 1) * 150}`}> 
                            <DepartmentCard deptname={department.displayName} />
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Departments