import React, { useState } from "react";

const tabs = [
  { name: "Todos", href: "#", current: true },
  { name: "Design (UI)", href: "#", current: false },
  { name: "Frontend", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface BarUnderlineProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export default function BarUnderline({
  selectedTab,
  setSelectedTab,
}: BarUnderlineProps) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4 justify-center" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setSelectedTab(tab.name)}
              className={classNames(
                tab.name === selectedTab
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-600 hover:text-gray-800",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={tab.name === selectedTab ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
