import React from "react";
import 'global.css';

export const metadata = {
  title: "AICA SUNMICA® Decorative Laminates | Japanese Technology | Free Design Consult",
  description: "Premium decorative laminates built on Japanese technology. Explore finishes, applications, infrastructure, and request a free design consultation."
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <link rel="stylesheet" href="/styles/globals.css" />
        {children}
      </body>
    </html>
  );
}