"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")} disabled={locale === "en"}>
        EN
      </button>
      <button onClick={() => switchLanguage("pt")} disabled={locale === "pt"}>
        PT
      </button>
    </div>
  );
}
