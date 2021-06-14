import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://github.com/montylion/discord-md-badge#readme");
  });
  return null;
}
