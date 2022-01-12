import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile';
function App() {
  const obj={display:"flex"}
  return (
    <div className="App">
      <Profile object={obj} fullName={"Fadhlaoui Marwa"} adresse={"residence le palais menzah 7 bis"} profession={"conseiller client"} > https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSm8dQLFFEZaRNIVBU4K_DpXSN6taLbdUQw&usqp=CAU</Profile> 
    </div>
  );
}

export default App;

