import SearchComponent from "./Components/SearchComponent";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { MDBTypography } from 'mdb-react-ui-kit';
function App() { 
  return (
    <div className="App">
      
      <header className="App-header">

      <MDBTypography variant='h1' ali color="secondary">Quotes Helper</MDBTypography>
      
      <SearchComponent></SearchComponent>

      </header>
      
    </div>
  );
}

export default App;
