import "./App.css";
import "preline/dist/preline"; // JS for interactive components
import { Accordion } from "./stories/Accordion";
import { Button } from "./stories/Button/Button";
import { Navbar } from "./stories/Navbar";
import { Footer } from "./stories/Footer/Footer";
import { Radio } from "./stories/Radio";

function App() {
  return (
    <>
      <Navbar />
      <Accordion />

      <p className="font-bold">HELLO WORLD</p>
      <p className="text-sm font-bold">HELLO WORLD</p>
      <p className="text-input font-bold">HELLO WORLD</p>
      <p className="text-base font-bold">HELLO WORLD</p>
      <p className="text-lg font-bold">HELLO WORLD</p>
      <p className="text-xl font-bold">HELLO WORLD</p>
      <p className="text-2xl font-bold">HELLO WORLD</p>
      <Button color="red" label="hello world" type="ghost" />
      <Radio />
      <Footer />
    </>
  );
}
export default App;
