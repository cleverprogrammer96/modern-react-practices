const { useState } = React;

const sidebarItems = [
  {
    icon: "dashboard",
    label: "Dashboard",
    nested: [
      { label: "Account Summary", icon: "account_balance" },
      { label: "Recent Activity", icon: "history" },
    ],
  },
  {
    icon: "credit_card",
    label: "Cards",
    nested: [
      { label: "View Cards", icon: "grid_view" },
      { label: "Add Card", icon: "add_card" },
    ],
  },
  {
    icon: "payments",
    label: "Payments",
    nested: [
      { label: "Make Payment", icon: "send" },
      { label: "Schedule Payment", icon: "schedule" },
    ],
  },
  {
    icon: "redeem",
    label: "Rewards",
    nested: [
      { label: "Points Summary", icon: "stars" },
      { label: "Redeem Points", icon: "card_giftcard" },
    ],
  },
  {
    icon: "account_circle",
    label: "Profile",
    nested: [
      { label: "Settings", icon: "settings" },
      { label: "Security", icon: "security" },
    ],
  },
  {
    icon: "help",
    label: "Support",
    nested: [
      { label: "Help Center", icon: "help_center" },
      { label: "Contact Us", icon: "contact_support" },
    ],
  },
];

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      className={`transition-all duration-300 bg-white flex flex-col
        ${expanded ? "w-64" : "w-16"} h-full rounded-r-xl shadow-lg
        overflow-hidden border-r border-gray-200`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => { setExpanded(false); setOpenIndex(null); }}
      style={{ minHeight: 0, maxHeight: "100%" }}
    >
      {/* Logo Area */}
      <div className="p-4 border-b border-gray-200 bg-[#002663]">
        <div className="flex items-center justify-center">
          <span className="material-icons text-2xl text-white">credit_card</span>
          {expanded && (
            <span className="ml-3 font-semibold text-sm text-white">American Express</span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {sidebarItems.map((item, idx) => (
          <div key={item.label} className="relative">
            <button
              className={`flex items-center w-full px-4 py-3 hover:bg-[#0075BE] hover:text-white transition-colors
                ${openIndex === idx && expanded ? "bg-[#0075BE] text-white" : "text-[#002663]"}`}
              onMouseEnter={() => expanded && setOpenIndex(idx)}
              onMouseLeave={() => expanded && setOpenIndex(null)}
              onClick={() => expanded && setOpenIndex(openIndex === idx ? null : idx)}
              tabIndex={0}
            >
              <span className="material-icons text-2xl">{item.icon}</span>
              {expanded && (
                <span className="ml-4 font-medium text-sm">{item.label}</span>
              )}
              {expanded && item.nested.length > 0 && (
                <span className="material-icons ml-auto text-base">
                  {openIndex === idx ? "expand_less" : "expand_more"}
                </span>
              )}
            </button>
            {expanded && item.nested.length > 0 && openIndex === idx && (
              <div className="ml-12 border-l border-[#0075BE] pl-4 py-1">
                {item.nested.map((sub) => (
                  <button
                    key={sub.label}
                    className="flex items-center w-full px-2 py-2 hover:bg-[#0075BE] hover:text-white rounded transition-colors group text-[#002663]"
                  >
                    <span className="material-icons text-base opacity-70 group-hover:opacity-100">{sub.icon}</span>
                    <span className="ml-3 text-sm opacity-70 group-hover:opacity-100">{sub.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="h-16 bg-white shadow-sm flex items-center px-6">
        <span className="font-bold text-[#002663] text-lg">American Express Portal</span>
      </header>
      {/* Main Content with Sidebar */}
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-2xl font-bold mb-4 text-[#002663]">Welcome Back</h1>
          <p className="text-gray-600">
            Access your American Express account information and services through the sidebar navigation.
          </p>
          <div className="h-96"></div>
        </main>
      </div>
      {/* Footer */}
      <footer className="h-14 bg-white shadow-sm flex items-center px-6 text-sm text-gray-600">
        © American Express Demo
      </footer>
      {/* Material Icons CDN */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
  );
}
