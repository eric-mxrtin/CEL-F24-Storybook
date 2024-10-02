
import "./App.css";
import "preline/dist/preline"; // JS for interactive components
import { Accordion } from "./stories/Accordion";
import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <Accordion />
      <Button type="outline" label="Red" color="red"/>
      <Button type="outline" label="Green" color="green"/>
      <Button type="outline" label="Purple" color="purple"/>
      <Button type="outline" label="Blue" color="blue"/>
      <Button type="outline" label="Yellow" color="yellow"/>
      <p className="font-bold">HELLO WORLD</p>
    </>
  );
}
export default App;
