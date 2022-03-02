import React from "react";

const Box = () => (
  <div className="box-border mt-16 border-solid border-slate-300 rounded-lg border-[0.5px] p-6">
    <div id="head" className="flex justify-between font-bold">
      <p>Minimun Coverage Select EPO</p>
      <p>Enrollment fee: $250</p>
    </div>
    <div id="body" className="flex justify-between mt-6">
      <img
        src="https://img001.prntscr.com/file/img001/HqlbD9_bS-m4nBrEdDu9Jg.png"
        alt="photo"
      ></img>
      <div className="my-auto">
        <p>Lowest use</p>
        <p>Good for when you rarely need care</p>
      </div>
      <div className="my-auto">
        <p>$8,700</p>
        <p>Out-of-pocket-maximun</p>
      </div>
      <div className="my-auto">
        <p>$8,700</p>
        <p>Deductible</p>
      </div>
      <div className="my-auto">
        <p>$178.54</p>
        <p>Monthly premium</p>
      </div>
    </div>
  </div>
);

export default Box;
