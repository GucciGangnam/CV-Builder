// import styles
import './App.css';
// import compontent 
import  { EditorScreen } from './components/EditorScreen';




function App() {
  return (
    <div className="App">
      <h1> Top of app </h1>
        <div className="CVContainer"> 
          <EditorScreen />
        </div>
    </div>
  );
}

export default App;
