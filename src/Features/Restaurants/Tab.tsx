"use client";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Tabs({ activeTab, setActiveTab }: Props) {
  const tabs = ["About", "Menu", "Photos"];

  return (
    <div className="border-b border-gray-200 flex gap-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 font-medium ${
            activeTab === tab
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-text-muted"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
