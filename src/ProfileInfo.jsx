import { useContext } from "react";
import { ProviderGet } from "./ProfileContext";

export function ProfileInfo() {
  const infoData = useContext(ProviderGet);

  return (
    <ul>
      <li>{infoData.bio}</li>
      <li>{infoData.followers} Seguidores</li>
      <li>{infoData.following} Seguindo</li>
      <li>{infoData.location}</li>
      <li>{infoData.public_repos} Repositorios</li>
    </ul>
  );
}
