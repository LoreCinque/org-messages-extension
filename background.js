chrome.runtime.onInstalled.addListener(() => {
  // Set up the periodic alarm
  chrome.alarms.create("fetchMessages", { periodInMinutes: 1 });

  // Initial fetch when installed
  fetchMessages();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "fetchMessages") {
    fetchMessages();
  }
});

function fetchMessages() {
  // Mocking API response with static messages
  const mockApiResponse = {
    messages: [
      {
        id: `msg-${Date.now()}`,
        content: "Team meeting at 3 PM today 😊",
        priority: "high",
        timestamp: new Date().toISOString(),
        read: false,
      },
      {
        id: `msg-${Date.now() + 1}`,
        content: "Don't forget to submit your weekly report.",
        priority: "low",
        timestamp: new Date().toISOString(),
        read: false,
      },
    ],
  };

  // Retrieve and update messages in Chrome storage
  chrome.storage.local.get(["messages"], (result) => {
    const currentMessages = result.messages || [];
    const updatedMessages = [...currentMessages, ...mockApiResponse.messages];
    chrome.storage.local.set({ messages: updatedMessages });

    // Update badge with unread messages count
    const unreadCount = updatedMessages.filter((msg) => !msg.read).length;
    chrome.action.setBadgeText({
      text: unreadCount > 0 ? unreadCount.toString() : "",
    });
    chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
  });
}
