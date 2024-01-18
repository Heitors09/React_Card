import { useContext } from "react";
import { ProviderGet } from "./ProfileContext";

export function ProfileShow() {
  const profileData = useContext(ProviderGet);

  return (
    <>
      <h1>{profileData.login}</h1>
      <img src={profileData.avatar_url} alt="" />
    </>
  );
}
