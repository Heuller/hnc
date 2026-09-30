import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-theme-primary focus:text-theme-primary-contrast focus:rounded-md focus:shadow-editorial focus:font-bold focus:outline-2 focus:outline-offset-2 focus:outline-theme-accent"
    >
      Pular para o conteúdo principal
    </a>
  );
};
