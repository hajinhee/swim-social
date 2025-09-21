import { useState } from "react";

export const useAppleWatch = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState("2025.01.15 20:30");

  const handleSync = async () => {
    setIsSyncing(true);

    setTimeout(() => {
      setIsSyncing(false);
      setIsConnected(true);
      setLastSync(
        new Date()
          .toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(/\. /g, ".")
          .slice(0, -1)
      );
    }, 3000);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  return {
    isConnected,
    isSyncing,
    lastSync,
    handleConnect,
    handleSync,
  };
};
