import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const reactStudy = ['ReactJS', 'Redux', 'Hooks', 'React Teting Library'];

function App() {
  return (
      <ol className="App-header">
        {reactStudy.map(task)}
      </ol>
  );
}

export default App;
