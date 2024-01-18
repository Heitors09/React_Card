import { ProviderGet } from "./ProfileContext";
import { useEffect } from "react";
import { useState } from "react";

export function ProfileGet({ children }) {
  const [Profile, setProfile] = useState({});

  useEffect(() => {
    let ignore = false;

    async function profileGet() {
      const data = await fetch("https://api.github.com/users/Heitors09");
      const json = await data.json();
      if (!ignore) {
        setProfile(json);
      }
    }
    profileGet();
    //cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ProviderGet.Provider value={Profile}>{children}</ProviderGet.Provider>
  );
}
