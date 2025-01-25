import { useEffect, useState } from 'react';
import { UrlDisplay } from '../../entities/Home/UrlDisplay/UrlDisplay';

export const CurrentUrlDisplay = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    chrome.runtime.sendMessage({ action: 'getCurrentUrl' }, (request) => {
      setCurrentUrl(request.media);
    });
  }, []);

  return <UrlDisplay currentUrl={currentUrl} />;
};
