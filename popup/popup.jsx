import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Remove the following import line as CSS is linked in index.html
// import '../src/tailwind.css';

function Popup() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch messages from Chrome storage
    chrome.storage.local.get(["messages"], (result) => {
      if (result.messages) {
        setMessages(result.messages);
      }
      setLoading(false);
    });
  }, []);

  const markAsRead = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    chrome.storage.local.set({ messages: updatedMessages });

    // Update unread count badge
    const unreadCount = updatedMessages.filter((msg) => !msg.read).length;
    chrome.action.setBadgeText({
      text: unreadCount > 0 ? unreadCount.toString() : "",
    });
  };

  if (loading) {
    return (
      <div className="text-center mt-4 text-lg text-gray-600">Loading...</div>
    );
  }

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen w-80">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
        Admin Messages
      </h2>
      {messages.length === 0 ? (
        <div className="text-gray-500 text-center">No new messages</div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-lg shadow-md border ${
                msg.read
                  ? "bg-white border-gray-200"
                  : "bg-red-50 border-red-300"
              }`}
            >
              <p className="text-lg font-medium mb-2">{msg.content}</p>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(msg.timestamp).toLocaleString()}
              </p>
              {!msg.read && (
                <button
                  onClick={() => markAsRead(msg.id)}
                  className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById("root"));
