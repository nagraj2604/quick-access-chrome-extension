import "./App.css";

const data = [
  {
    name: "My Tabs",
    url: [
      "https://mail.google.com/mail/u/0",
      "https://github.com/nagraj2604",
      "https://www.youtube.com/",
    ],
  },
];

function App() {
  const openLinks = (url) => {
    for (const link of url) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="App">
      <div className="lists">
        {data.map((item) => {
          return (
            <button className="button" onClick={() => openLinks(item.url)}>
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
