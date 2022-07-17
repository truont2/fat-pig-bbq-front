import React from "react";
import dynamic from "next/dynamic";

//TODO: Render map and Hours of Op in the grid below.
export default function Location({data}) {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  // moment(time, "HH:mm:ss").format("hh:mm A")
  return (
    <div >
        <MapWithNoSSR />
    </div>
  );
}
