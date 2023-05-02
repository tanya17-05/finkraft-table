import { Table } from "./components"
import { COLUMNS } from "./constants";
import { employeeData } from "./data";


const App = () => {
  return (
    <div className="w-full mt-12 flex flex-col items-center justify-center">
      <Table columns={COLUMNS} data={employeeData}/>
    </div>
  )
}

export default App