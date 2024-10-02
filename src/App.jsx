
import "./App.css";
import "preline/dist/preline"; // JS for interactive components
import { Accordion } from "./stories/Accordion";
import { Button } from "./stories/Button/Button";
import { Navbar } from "./stories/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Accordion />
      <Button label="Red" color="red"/>
      <Button label="Green" color="green"/>
      <Button label="Purple" color="purple"/>
      <Button label="Button" color="blue"/>
      <Button label="Gray" color="gray" disabled="true"/>
      <Button label="Yellow" color="yellow" type="soft" disabled="true"/>
      <p className="font-bold">HELLO WORLD</p>
    </>
  );
}
export default App;
