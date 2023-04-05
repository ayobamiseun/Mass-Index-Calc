 import React, {useState} from "react";
import BodyCalculator from "./BodyCalculator";

export default function BMI() {
  const [bmiValue, setBmiValue ] = useState(0)
  return (
    <>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container ">
        <div className="bmi-result">
        <div className="bmi-result-number">
         Body Mass Index number = {bmiValue} 

        </div>

        <div className={`bmi-calculator`}>
              Under weight
        </div>

        </div>
        <BodyCalculator setBmiValue={setBmiValue} /> 

        </div>
      </div> 
    </>
  )
}