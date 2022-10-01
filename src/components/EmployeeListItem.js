const EmployeeListItem = (props) => {
    return (
      <>
        <div className="employeeName">
            <img alt="employee card" className="employeePic" src="https://i.etsystatic.com/28369479/r/il/81b2dd/4122475670/il_340x270.4122475670_a5kr.jpg" />
          <h2>Employee Name</h2>
            <p className="employeeTitle">Title</p>
          </div>
      </>
    )
  }
  
  export default EmployeeListItem;