import React, { useContext, useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

const SectorContext = React.createContext("en");

function useSector() {
  const context = useContext(SectorContext);
  if (!context) {
    throw new Error("useSector must be used within the SectorProvider");
  }
  return context;
}

function SectorProvider(props) {
  const url = useParams();
  const [sector, setSector] = useState(() => url[0] || props.sector);

  const [value] = useMemo(() => [sector, setSector], [sector]);
  return <SectorContext.Provider value={value} {...props} />;
}

export { useSector, SectorProvider };
