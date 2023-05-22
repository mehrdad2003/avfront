import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import { useAirport } from "../../AirportContext";
import AirportSelectInput from "../../components/AirportSelectInput";
import PageLayout from "../../components/PageLayout";


export default function SelectAirportPage() {
  const [, setAirport] = useAirport();
  const history = useHistory();
  const location = useLocation();

  const handleAirportLoaded = useCallback(
    (data) => {
      setAirport(data);
      history.push("/airport/" + data.icao);
    },
    [history, setAirport]
  );

  return (
    <PageLayout>
      <Helmet>
        <title>M-runway</title>
      </Helmet>
      <div>
        <div className="relative z-10 min-h-screen flex items-center justify-center c-min-h-screen">
          <div className="mb-10 xl:mb-28">
            <div className="flex justify-center opacity-90">
              <img
                src="/logo.png"
                alt="which runway to choose logo"
                className="w-32 md:w-60"
              />
            </div>
            <h1 className="mb-10 lg:mb-14 block text-center text-4xl lg:text-6xl max-w-lg font-bold">
             کد ایکائو را وارد کن
            </h1>
            <div className="mb-10 px-5">
              <AirportSelectInput
                initialError={location.state?.error}
                initialValue={location.state?.icao}
                onDataLoaded={handleAirportLoaded}
              />
            </div>
           
          </div>
        </div>
      </div>
      
     
    </PageLayout>
  );
}
