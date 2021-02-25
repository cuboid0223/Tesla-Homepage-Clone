import "./App.css";
import Header from "./components/Header/Header";
import Item from "./components/HomePage/Item/Item";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
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
        <Item
          title="Model X"
          desc="立即試駕"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="客製化訂單"
          leftBtnLink=""
          rightBtnTxt="了解更多內容"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="立即試駕"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="了解更多內容"
          leftBtnLink=""
          rightBtnTxt="掌握最新資訊"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar Roof 和 Powerwall 產品"
          desc="全方位能源供應"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="了解更多內容"
          leftBtnLink=""
          last='true'
        />
      </div>
    </div>
  );
}

export default App;
