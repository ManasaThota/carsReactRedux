import CarForm from "./componenets/CarForm"
import CarList from "./componenets/CarList"
import CarSearch from "./componenets/CarSearch"
import CarValue from "./componenets/CarValue"

function App() {
    return (
    <div className="container is-fluid">
       <CarForm />
       <CarSearch />
       <CarList />
       <CarValue />
    </div>
    )
}

export default App