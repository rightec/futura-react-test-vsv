import React from "react";

const CatHide = (prop) => {
    return (
      <div>
        <h2>
            SELECTED CATEGORY:
            <span className="Selected-Cat">
            {prop}
            </span>
        </h2>
      </div>
    )
  }
  export default CatHide