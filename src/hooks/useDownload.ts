// src/hooks/useDownload.ts
import { useState } from "react";

export interface UseDownloadResult {
  isDownloading: boolean;
  handleDownload: (fileName: string, delay?: number) => void;
}

export const useDownload = (): UseDownloadResult => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (fileName: string, delay: number = 2000) => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "#";
      link.download = fileName;
      link.click();

      setIsDownloading(false);
    }, delay);
  };

  return { isDownloading, handleDownload };
};
