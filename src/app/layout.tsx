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
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
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
        {children}
      </body>
    </html>
  );
};

export default Layout;

