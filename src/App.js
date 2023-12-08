import "./App.css";
import { Listing } from "./components/Listing";
import etsy from "./data/etsy.json";
import { processEtsyItems } from "./utils";

const App = () => <Listing items={processEtsyItems(etsy)} />;

export default App;
