// "use client";
// import { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";

// interface RootLayoutProps {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>{children}</SessionProvider>
//       </body>
//     </html>
//   );
// }
"use client";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/public/about">About</Link>
            </li>
            <li>
              <Link href="/public/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/public/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
