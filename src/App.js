import logo from './logo.svg';
import './App.css';
import "jalaali-react-date-picker/lib/styles/index.css";
import InputDatePicker from './components/InputDatePicker';
import DatePicker from './components/DatePicker';
import RangePicker from './components/RangePicker';

function App() {
  return (
    <div className="App">
      <DatePicker />
      <RangePicker />
      <InputDatePicker />
    </div>
  );
}

export default App;