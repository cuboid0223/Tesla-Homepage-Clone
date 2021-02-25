import "./App.css";
import Header from "./components/Header/Header";
import Item from "./components/HomePage/Item/Item";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg"
function App() {
  return (
    <div className="app">
      {/* {header} */}
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Model S"
          desc="立即試駕"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="客製化訂單"
          leftBtnLink=""
          rightBtnTxt="了解更多內容"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model 3"
          desc="立即試駕"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="客製化訂單"
          leftBtnLink=""
          rightBtnTxt="了解更多內容"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
