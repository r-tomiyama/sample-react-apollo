import React, { useMemo } from "react";

import reactLogo from "@/assets/react.svg";
import "./style.css";
import { useStarships } from "../../hooks/useStarships";

export const Top: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { loading, error, data } = useStarships();
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

    return (
      <>
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          data.allStarships.starships.map(
            (starship: { id: string; name: string }) => (
              <div key={starship.id}>
                <p>{starship.name}</p>
              </div>
            )
          )
        }
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
