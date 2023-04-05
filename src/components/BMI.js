import React, { useState, useEffect } from "react";
import BodyCalculator from "./BodyCalculator";

export default function BMI() {
  const [bmiValue, setBmiValue] = useState(0);
  const [category, setCategory] = useState("");
  const [background, setBackground] = useState("")

  useEffect(() => {
    function bmiCategory() {
      if (bmiValue >= 1 && bmiValue <= 18.5) {
        setCategory("Underweight");
      }
      if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory("Normal weight");
      }
      if (bmiValue >= 24.9 && bmiValue <= 29.9) {
        setCategory("Overweight");
      }
      if (bmiValue >= 30) {
        setCategory("Obese");
      }
    }
    bmiCategory();

    function BmiBackground() {
      if (bmiValue >= 1 && bmiValue <= 18.5) {
        setBackground("#FED88B");
      }
      if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBackground("#80ff80");
      }
      if (bmiValue >= 24.9 && bmiValue <= 29.9) {
        setBackground("#FF7F50");
      }
      if (bmiValue >= 30) {
        setBackground("#FF5411");
      }
    }
    BmiBackground()

    
   
    
  }, [bmiValue]);

  let bmiStyle = "";
  if (bmiValue > 0 && category) {
  
    bmiStyle = category.split(" ")[0].toLowerCase();
  }
  console.log(bmiStyle);

  return (
    <>
      <div style={{backgroundColor: background}} className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass Index number = {bmiValue}
            </div>

            <div className={`bmi-category ${bmiStyle}`}>
                 {category}
            </div>
          </div>
          <BodyCalculator setBackground={setBackground} setBmiValue={setBmiValue} />
        </div>
      </div>
    </>
  );
}
