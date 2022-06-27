import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DivDesk from "./images/pattern-divider-desktop.svg";
import DivMobile from "./images/pattern-divider-mobile.svg";
import IconDice from "./images/icon-dice.svg";
function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip);
  };
  useEffect(() => {
    console.log("use effect");
    console.log("use effect");

    getAdvice();

  }, []);
  return (
    <div>
      {" "}
      <main className="min-h-screen bg-DarkBlue flex flex-col justify-center relative overflow-hidden">
        <div className=" bg-DarkGrayishBlue rounded-[25px] m-auto sm:w-[540px]  xs:w-[343px]">
          {/* sm:h-[332px] xs:h-[314px] */}
          <div className="text-center p-5">
            <p className=" uppercase text-sm text-NeonGreen py-4"></p>
            <h1 className=" text-LightCyan text-lg font-bold px-8">
              &quot;{advice.advice}&quot;
            </h1>
          </div>

          <div className="sm:block mx-12 my-3  static xs:hidden">
            <img src={DivDesk} alt="pattern-divider-desktop" />
            <button
              onClick={getAdvice}
              className="bg-NeonGreen rounded-full w-16 h-16 hover:shadow-[0_0_40px_2px_rgba(82,255,168,0.51)] mx-[190px] mt-4"
            >
              <img src={IconDice} alt="icon-dice" width={24} height={24} />
            </button>
          </div>

          <div className="m-6 static sm:hidden xs:block ">
            <img src={DivMobile} alt="pattern-divider-mobile" />
            <button
              onClick={getAdvice}
              className="bg-NeonGreen rounded-full w-16 h-16 hover:shadow-[0_0_40px_2px_rgba(82,255,168,0.51)] mx-[115px] mt-5"
            >
              <img src={IconDice} alt="icon-dice" width={24} height={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
