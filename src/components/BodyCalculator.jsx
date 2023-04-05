import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

export default function BodyCalculator({ setBmiValue, setBackground }) {
  const [heightUnit, setHeightUnit] = useState("");
  const [weightUnit, setWeightUnit] = useState("");
  const [inchesUnit, setInchesUnit] = useState("");
  
  
  const [unit, setUnit] = useState("");
  const [count, setCount] = useState({
    heightCount: "0",
    inchesCount: "0",
    weightCount: "0",
  });
  function bmiFormular(height, weight) {
    if (weight > 0 && height > 0) {
      const heightToMeter = height / 100;
      const bmi = weight / (heightToMeter * heightToMeter);
      console.log(bmi);
      setBmiValue(Math.round(bmi));
    }
  }

  function imperialBmi(height, weight, inches) {
    if (height > 0 && weight > 0 && inches > 0) {
      // wo since 12 inches make a foot
      // foot into inches  and then add it to inches value
      const heightToInches = height * 12 + parseInt(inches);
      const bmi = 703 * (weight / (heightToInches * heightToInches));
      setBmiValue(Math.round(bmi));
    }
  }
  const { heightCount, inchesCount, weightCount } = count;

  useEffect(() => {
    if (unit === "") {
      setUnit("Metric");
      setHeightUnit("cm");
      setWeightUnit("Kg");
    }
    bmiFormular(heightCount, weightCount);
    imperialBmi(heightCount, weightCount, inchesCount);
  }, [heightCount, weightCount, inchesCount]);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setCount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSelectTag = (e) => {
    setUnit(e.target.value);
    if (e.target.value === "Metric") {
      setHeightUnit("cm");
      setWeightUnit("Kg");
    } else {
      setHeightUnit("ft");
      setWeightUnit("lbs");
      setInchesUnit("in");
    }
  };
  function ResetData(e) {
    e.preventDefault();
    setBmiValue(0);
    setCount({
      heightCount: "0",
      inchesCount: "0",
      weightCount: "0",
    });
    setUnit("Metric");
    setHeightUnit("cm");
    setWeightUnit("Kg");
    setBackground("")
  }

 

  return (
    <>
      <div className="bmi-input">
        <div className="input-fields">
          <div>
            <span className="label-unit"> unit</span>
            <div className="unit">
              <select
                name="unit"
                value={unit}
                onChange={onSelectTag}
                className="form-control form-control-sm"
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            text="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === "Imperial" ? (
            <FormInput
              text="text"
              name="inchesCount"
              title={`Inches (${inchesUnit})`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          ) : (
            ""
          )}
          <FormInput
            text="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit" onClick={ResetData}>
          Reset
        </button>
      </div>
    </>
  );
}
