"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "./dropdown";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "pt", name: "Português", flag: "/images/Flag_of_Brazil.png" },
  {
    code: "en",
    name: "English",
    flag: "/images/Flag_of_the_United_Kingdom.png",
  },
];

interface SwitchLanguageProps {
  title: string;
  className?: string;
}

const SwitchLanguage: React.FC<SwitchLanguageProps> = ({
  title,
  className,
}) => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const safePath = pathname || "/";

  return (
    <Dropdown>
      <DropdownButton outline className={className}>
        <Image
          src={
            languages.find((lang) => lang.code === currentLocale)?.flag ||
            languages[0].flag
          }
          width={16}
          height={16}
          alt={currentLocale}
          className="mr-2"
        />
        {title}
        <ChevronDownIcon className="ml-2" size={16} />
      </DropdownButton>
      <DropdownMenu>
        {languages.map((lang) => (
          <DropdownItem key={lang.code}>
            <Link href={safePath} locale={lang.code}>
              <div className="flex items-center gap-2">
                <Image src={lang.flag} width={24} height={24} alt={lang.name} />
                <span>{lang.name}</span>
              </div>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SwitchLanguage;
