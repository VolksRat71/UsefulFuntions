import { useTheme } from "@material-ui/core";

export const textEmphasis = (text, duplicate, level) => {
  const theme = useTheme();
  const alertPallette = {
    noAlert: theme.palette.type === "dark" ? "#86FF87" : "#8BC900",
    lowAlert: theme.palette.type === "dark" ? "#FEDC2A" : "#FFCF22",
    midAlert: theme.palette.type === "dark" ? "#FF8D35" : "#FF7335",
    highAlert: theme.palette.type === "dark" ? "#EB3941" : "#FF3636",
    contrast: "#000",
  };

  return (
    <span
      style={{
        backgroundColor: duplicate && alertPallette[level],
        color: duplicate ? alertPallette["contrast"] : alertPallette["noAlert"],
        padding: duplicate && "2px",
        borderRadius: duplicate && "2px",
      }}
    >
      {text}
    </span>
  );
};
