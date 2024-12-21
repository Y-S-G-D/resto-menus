import { Open_Sans,Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const open_Sans = Open_Sans({
  subsets: ['latin'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_Sans.className} ${syne.variable} antialiased `}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
