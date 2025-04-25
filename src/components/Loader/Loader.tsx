import type React from "react";
import { Ring } from "@uiball/loaders";
import type { LoaderProps } from "../../types/Loader.types";

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = "grey",
  speed = 2,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Ring size={size} lineWeight={5} speed={speed} color={color} />
    </div>
  );
};

export default Loader;
