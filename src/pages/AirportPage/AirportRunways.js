import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import AirportRunwayCard from "./AirportRunwayCard";

export default function AirportRunways(props) {
  const { airport, activeRunwaysData } = props;

  const sortedRunways = useMemo(() => {
    const runways = [];
    for (const runway of airport.runways) {
      runways.push({
        heading: (runway.he_heading_degT + 180) % 360,
        length: runway.length_ft,
        width: runway.width_ft,
        ident: runway.le_ident,
        invertIdent: runway.he_ident,
        active: activeRunwaysData[runway.le_ident],
        ils: runway.le_ils,
      });

      runways.push({
        heading: runway.he_heading_degT,
        length: runway.length_ft,
        width: runway.width_ft,
        ident: runway.he_ident,
        invertIdent: runway.le_ident,
        active: activeRunwaysData[runway.he_ident],
        ils: runway.he_ils,
      });
    }

    const sortIndexes = {
      tailwind: 0,
      crosswind: 1,
      headwind: 2,
    };

    const sortedRunways = runways.sort((a, b) => {
      return (
        sortIndexes[b.active?.status] - sortIndexes[a.active?.status] ||
        (!!b.ils ? 1 : 0) - (!!a.ils ? 1 : 0) ||
        a.active?.crosswind - b.active?.crosswind
      );
    });

    return sortedRunways;
  }, [airport, activeRunwaysData]);

  return (
    <div className="mb-8 md:mb-16">
      <h2 className="mb-5 max-w-lg mx-auto text-4xl font-semibold text-center">
        باندها
      </h2>
    
      {airport.wind_direction === 0 ? (
        <div className="mb-5 max-w-lg mx-auto text-center">
          <span className="font-bold" style={{ color: "#dea109" }}>
            جهت وزش باد متغییر است
          </span>
        
        </div>
      ) : null}
      <div></div>
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
        {sortedRunways.map((runway) => {
          return (
            <AirportRunwayCard
              key={runway.ident}
              ident={runway.ident}
              active={runway.active}
              invertMark={runway.invertIdent}
              heading={runway.heading}
              length={runway.length}
              width={runway.width}
              ils={runway.ils}
            />
          );
        })}
      </div>
    </div>
  );
}
