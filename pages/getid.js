import { useRouter } from "next/router";
import { useEffect } from "react";

export default function getID() {
  const router = useRouter();
  useEffect(() => {
    router.push(
      "https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-"
    );
  });
  return null;
}
