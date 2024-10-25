const position = { x: 0, y: 0 };

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "Jotform",
      subtext: "New Response",
      icon: "/assets/images/reactflow/Jotform.svg",
    },
    position,
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Google Docs",
      subtext: "Append Text to Document",
      icon: "/assets/images/reactflow/docs.svg",
    },
    position,
  },
  {
    id: "3",
    type: "custom",
    position: { x: 250, y: 500 },
    data: {
      label: "Router (Pabbly)",
      subtext: "Split Into Routes",
      icon: "/assets/images/reactflow/router.svg",
    },
    position,
  },
  {
    id: "4",
    type: "custom",
    data: {
      label: "Chat Gpt",
      subtext: "Append Text to Document",
      icon: "/assets/images/reactflow/chatgpt.svg",
    },
    position,
  },
  {
    id: "5",
    type: "custom",
    data: {
      label: "Gmail",
      subtext: "Incoming Messages",
      icon: "/assets/images/reactflow/mail.svg",
    },
    position,
  },
  {
    id: "6",
    type: "custom",
    data: {
      label: "Hubspot",
      subtext: "Create Contact",
      icon: "/assets/images/reactflow/hubspot.svg",
    },
    position,
  },
  {
    id: "7",
    type: "custom",
    data: {
      label: "Router (Pabbly)",
      subtext: "Split Into Routes",
      icon: "/assets/images/reactflow/router.svg",
    },
    position,
  },
  {
    id: "8",
    type: "custom",
    data: {
      label: "Javascript",
      subtext: "Extract Data",
      icon: "/assets/images/reactflow/js.svg",
    },
    position,
  },
  {
    id: "9",
    type: "custom",
    data: {
      label: "Router (Pabbly)",
      subtext: "Split Into Routes",
      icon: "/assets/images/reactflow/router.svg",
    },
    position,
  },
  {
    id: "10",
    type: "custom",
    data: {
      label: "MySql",
      subtext: "Add New Row",
      icon: "/assets/images/reactflow/mysql.svg",
    },
    position,
  },
  {
    id: "11",
    type: "custom",
    data: {
      label: "Google Sheets",
      subtext: "Append Text to Document",
      icon: "/assets/images/reactflow/sheets.svg",
    },
    position,
  },
  {
    id: "12",
    type: "custom",
    data: {
      label: "Google Sheets",
      subtext: "Append Text to Document",
      icon: "/assets/images/reactflow/sheets.svg",
    },
    position,
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: "smoothstep" },
  { id: "e13", source: "2", target: "3", type: "smoothstep" },
  { id: "e22a", source: "3", target: "4", type: "smoothstep" },
  { id: "e22b", source: "4", target: "5", type: "smoothstep" },
  { id: "e36", source: "3", target: "6", type: "smoothstep" },
  { id: "e67", source: "6", target: "7", type: "smoothstep" },
  { id: "e78", source: "7", target: "8", type: "smoothstep" },
  { id: "e89", source: "8", target: "9", type: "smoothstep" },
  { id: "e910", source: "9", target: "10", type: "smoothstep" },
  { id: "e911", source: "9", target: "11", type: "smoothstep" },
  { id: "e712", source: "7", target: "12", type: "smoothstep" },
];
