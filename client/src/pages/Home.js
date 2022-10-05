import React from "react";
import History from "../components/History";
import Memory from "../components/Memory";
import MemoryInput from "../components/MemoryInput";

import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_MEMORIES } from "../utils/queries";
import EveryMemory from "../components/EveryMemory";

const Home = () => {
  // add useQuery hook here
  const { data } = useQuery(QUERY_MEMORIES);
  const memory = data?.memories || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className="page-view">
      {!loggedIn && (
        <div>
          <History />
        </div>
      )}
      {loggedIn ? (
        <div>
          <MemoryInput />
          <br />
          <h2>Your Memories for Today</h2>
          <Memory memory={memory} />
          <br />
          <EveryMemory />
          <History />
        </div>
      ) : null}
    </main>
  );
};

export default Home;
