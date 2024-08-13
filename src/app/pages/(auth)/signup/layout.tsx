
export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EA2793]" >
        {children}
      </body>
    </html>
  );
}
