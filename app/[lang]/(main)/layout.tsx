import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dict = await getDictionary(locale);

  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Header dict={dict} />
      <main className="flex-auto pt-6 sm:pt-8">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
