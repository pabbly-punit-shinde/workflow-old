import React from "react";
import { Handle } from "@xyflow/react"; // Import Handle from ReactFlow

// Custom Node component
const CustomNode = ({ data, isHorizontal }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: isHorizontal ? "column" : "row",
        alignItems: "center",
      }}
    >
      {/* Image node with source and target handles */}
      <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
        <img
          src={data.icon}
          alt={data.label}
          style={{
            width: 60,
            height: 60,
            filter: "drop-shadow(0px 5px 6px rgb(0 0 0 / 0.25))",
          }}
        />
        
        {/* Add source and target handles, position dynamically */}
        <Handle
          type="source"
          position={isHorizontal ? "right" : "bottom"} // Dynamically position based on layout direction
          style={{
            background: "transparent",
            top: isHorizontal ? "50%" : "90%", // Position the source handle at the bottom or center based on layout
            left: isHorizontal ? "90%" : "50%", // Move to the right or center based on layout
            transform: isHorizontal ? "translateY(-50%)" : "translateX(-50%)", // Adjust transform for vertical
            border: "none",
          }}
        />
        <Handle
          type="target"
          position={isHorizontal ? "left" : "top"} // Dynamically position based on layout direction
          style={{
            background: "transparent",
            top: isHorizontal ? "50%" : 0, // Position the target handle at the top or center based on layout
            left: isHorizontal ? "0" : "50%", // Move to the left or center based on layout
            transform: isHorizontal ? "translateY(-50%)" : "translateX(-50%)", // Adjust transform for vertical
            border: "none",
          }}
        />
      </div>

      {/* Label and subtext position dynamically based on layout */}
      <div
        style={{
          position: "relative",
          textWrap:"nowrap",
          marginTop: isHorizontal ? 10 : 0, // Add margin on top for horizontal layout
          textAlign: isHorizontal ? "center" : "left", // Center text in horizontal layout
          marginLeft: isHorizontal ? 0 : "10px", // For vertical layout, move to the right of the image
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontFamily: "Public Sans",
            fontSize: 16,
            color: "#1C252E",
          }}
        >
          {data.label}
        </div>
        <div
          style={{
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
