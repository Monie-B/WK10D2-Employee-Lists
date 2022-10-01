import EmployeeListItem from "./EmployeeListItem"

const EmployeeList = (props) => {
  return (
    <>
        <div className="employeeCard">
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </div>
    </>
  )
}

export default EmployeeList;