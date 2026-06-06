
import "./globals.css";
import SmoothScroll from "@/componenets/SmoothScroll";

export const metadata = {
  title: "Pratik Dabhade | Full Stack Developer",
  description: "Portfolio of Pratik Dabhade, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: ["Pratik Dabhade", "Full Stack Developer", "React Developer", "Next.js", "Node.js", "Web Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Pratik Dabhade" }],
  creator: "Pratik Dabhade",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pratik Dabhade | Full Stack Developer",
    description: "Portfolio of Pratik Dabhade, a passionate Full Stack Developer specializing in modern web technologies.",
    siteName: "Pratik Dabhade Portfolio",
    images: [
      {
        url: "/pratik.jpg",
        width: 1200,
        height: 630,
        alt: "Pratik Dabhade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Dabhade | Full Stack Developer",
    description: "Portfolio of Pratik Dabhade, a passionate Full Stack Developer.",
    images: ["/pratik.jpg"],
  },
  icons: {
    icon: "/portfolio.svg",
    apple: "/portfolio.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
