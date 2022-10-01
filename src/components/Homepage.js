import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
// import EmployeeListItem from "./EmployeeListItem";

const Homepage = (props) => {
    return (
    <>
        <div className="section">
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
    </>
  )
}

export default Homepage;