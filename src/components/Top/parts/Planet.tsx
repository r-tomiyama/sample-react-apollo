import { GetAllPlanetsQuery } from "@/graphql/__generated__/typesAndHooks";
import React, { useMemo } from "react";

type Props = {
  planet: NonNullable<
    NonNullable<NonNullable<GetAllPlanetsQuery["allPlanets"]>["planets"]>[0]
  >;
};

export const Planet: React.FC<Props> = ({ planet }) => {
  const content: JSX.Element = useMemo(() => {
    return (
      <>
        <p>直径: {planet.diameter}</p>
        <p>人口: {planet.population}</p>
        <p>
          出身人物:{" "}
          {planet.residentConnection?.residents
            ?.map((resident) => resident?.name)
            .join(", ")}
        </p>
      </>
    );
  }, [planet]);

  return (
    <div>
      <h2>{planet.name}</h2>
      {content}
    </div>
  );
};
