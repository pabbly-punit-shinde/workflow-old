import React from "react";
import { Handle } from "@xyflow/react"; // Import Handle from ReactFlow

// Custom Node component
const CustomNode = ({ data }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* Image node with source and target handles */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={data.icon}
          alt={data.label}
          style={{
            width: 60,
            height: 60,
            filter: "drop-shadow(0px 5px 6px rgb(0 0 0 / 0.25))",
          }}
        />
        {/* Add source and target handles, positioned on the image */}
        <Handle
          type="source"
          position="bottom" // Position the source handle at the bottom of the image
          style={{
            background: "transparent",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            border: "none",
          }}
        />
        <Handle
          type="target"
          position="top" // Position the target handle at the top of the image
          style={{
            background: "transparent",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            border: "none",
          }}
        />
      </div>

      {/* Label and subtext floating outside of the node */}
      <div
        style={{
          // backgroundColor:"red",
          position: "absolute",
          left: "75%", // Position to the right of the image
          top: "50%",
          transform: "translateY(-50%)", // Center vertically with the image
          textAlign: "left",
          pointerEvents: "none", // Make sure label and subtext don't interfere with node interaction
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            textWrap: "nowrap",
            fontFamily: "Public Sans",
            fontSize: 16,
            color: "#1C252E",
          }}
        >
          {data.label}
        </div>

        <div
          style={{
            textWrap: "nowrap",
            fontFamily: "Public Sans",
            fontSize: 14,
            color: "#556370",
          }}
        >
          {data.subtext}
        </div>
      </div>
    </div>
  );
};

export default CustomNode;
