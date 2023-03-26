import React, { useMemo } from "react";

import reactLogo from "@/assets/react.svg";
import "./style.css";
import { useGetAllPlanetsQuery } from "@/graphql/__generated__/typesAndHooks";
import { Planet } from "./parts/Planet";
export const Top: React.FC = () => {
  const { loading, error, data } = useGetAllPlanetsQuery();
  const content: JSX.Element = useMemo(() => {
    if (loading) {
      return (
        <>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>読み込み中...</p>
        </>
      );
    }
    if (error) {
      return <p>エラーが発生しました</p>;
    }

    if (!data || !data.allPlanets || !data.allPlanets.planets) {
      return <p>データが存在しません</p>;
    }

    return (
      <>
        {data.allPlanets.planets
          .filter(
            (planet): planet is NonNullable<typeof planet> => planet != null
          )
          .map((planet) => (
            <Planet key={planet.id} planet={planet} />
          ))}
      </>
    );
  }, [loading, error, data]);

  return (
    <div>
      <h1>Vite + React + Apollo Client サンプル</h1>
      {content}
    </div>
  );
};
