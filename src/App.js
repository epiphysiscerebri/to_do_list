import './App.css';
import List from './components/List';



function App(props) {
  return (
    <div className="App">
      <List state= {props.state} />
    </div>
  );
}

export default App;
