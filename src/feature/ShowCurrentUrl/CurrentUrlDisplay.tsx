import { useEffect, useState } from 'react';
import { UrlDisplay } from '../../entities/Url/UrlDisplay/UrlDisplay';

export const CurrentUrlDisplay = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    chrome.runtime.sendMessage({ action: 'getCurrentUrl' }, (request) => {
      setCurrentUrl(request);
    });
  }, []);

  const handleDownload = () => {
    chrome.downloads.download({
      url: 'https://www.google.com',
      filename: 'google.com.html',
    });
  };

  return <UrlDisplay currentUrl={currentUrl} onDownload={handleDownload} />;
};
