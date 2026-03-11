export const formatLabel = (label?: unknown) =>
  typeof label ===  "string" && label.length > 0
    ? label.replace(/_/g, " ")
    : "";
