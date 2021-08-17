import React, { useState, useEffect } from "react";

export const SomeComponent = () => {
  const [someState, setSomeState] = useState({ name: "barney" });

  useEffect(() => {
    const apromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("wilma2");
      }, 5000);
    })
      .then(
        (resolved) => {
          setSomeState({ name: `resolved: ${resolved}` });
        },
        (rejected) => {
          setSomeState({ name: `rejected: ${rejected}` });
        }
      )
      .catch((error) => {
        console.log(error.message);
        setSomeState({ name: error.message });
      });

    Promise.all([apromise]).then((values) => {
      console.log(`done ${values}!`);
    });
  }, [setSomeState]);

  return <div>SomeComponent {someState.name}</div>;
};
