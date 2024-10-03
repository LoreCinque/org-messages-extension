# Org Messages Chrome Extension

A Chrome extension that allows an organization's admin to display messages to users. Users can view, mark as read, and see message details in a popup. The extension utilizes React for UI, Tailwind CSS for styling, and Webpack for bundling.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Installation and Testing](#installation-and-testing)
- [Assumptions Made](#assumptions-made)
- [Architectural Decisions](#architectural-decisions)
- [Future Improvements](#future-improvements)

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure that Node.js (>= 14.x) and npm (>= 6.x) are installed.
- **Google Chrome**: Chrome browser installed for testing the extension.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/LoreCinque/org-messages-extension.git
   cd org-messages-extension
   ```

2. **Install Dependencies**:
   Install all project dependencies using npm:

   ```bash
   npm install
   ```

3. **Build the Project**:
   Build both the Tailwind CSS and JavaScript bundles:

   ```bash
   npm run build
   ```

   This command will:

   - Generate the CSS styles using Tailwind (`dist/tailwind.output.css`).
   - Bundle the React code into a JavaScript file (`dist/popup.bundle.js`).

4. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top right).
   - Click **Load unpacked** and select the project folder (`org-messages-extension`).

## Installation and Testing

### Running the Extension

1. **Install the Extension in Chrome**:

   - After loading the extension in Developer Mode, you should see the extension icon appear in your toolbar.
   - Click on the extension icon to open the popup.

2. **Testing Features**:
   - **Badge Notification**: When there are unread messages, a badge will show the number of unread messages.
   - **View and Mark Messages as Read**: Click on the extension icon to view messages. Click the "Mark as Read" button to mark any message as read.

### Testing Tips

- To simulate fetching messages, the background script automatically adds new mock messages every minute.
- Open the Chrome Developer Tools (`F12` or `Ctrl+Shift+I`), go to the **Console**, and select the **Background Page** to see logs and debug issues.

## Assumptions Made

- **Local Storage**: Messages are stored in Chrome's `local` storage for persistence.
- **Mock Data**: A mock API response is used for providing admin messages. The messages are generated in the background script as a simulation of real data.
- **Tailwind CSS Integration**: Tailwind is integrated into the project by generating a CSS file during build time to simplify the application of consistent styles.

## Architectural Decisions

### 1. **React for UI**

React is used to build the extension's popup to provide a dynamic and responsive user interface. React’s component-based model helps keep the code modular, clean, and maintainable.

### 2. **Tailwind CSS for Styling**

Tailwind CSS was chosen to simplify the styling process through utility classes, allowing for rapid prototyping and maintaining a clean, minimal CSS footprint.

### 3. **Webpack for Bundling**

Webpack is used for bundling JavaScript and CSS files into a compact and optimized output. This helps to structure the project into manageable modules, making it easy to maintain and scale.

### 4. **Background Script**

A background script runs in the background to simulate new messages being fetched from an admin. The background script also manages the badge count for unread messages on the extension icon.

### 5. **Manifest Version 3**

Manifest V3 is used due to its improved security, better permissions control, and the latest Chrome extension features.

## Future Improvements

### 1. **Backend Integration**

Replace the mock API response with a real backend API to fetch messages. This would allow the extension to be used in a real organizational context where admins can push messages to users.

### 2. **Options Page**

Add an options/settings page that would allow users to configure preferences, such as notification settings (e.g., enable/disable notifications) or themes (e.g., light/dark mode).

### 3. **Message Categorization**

Add message categories (e.g., "High Priority", "General Information"). High-priority messages could trigger desktop notifications or be highlighted differently.

### 4. **Offline Functionality**

Enhance offline capabilities by using `chrome.storage.sync` to synchronize messages across multiple devices and ensure messages are accessible without an internet connection.

### 5. **User Authentication**

Implement user authentication to ensure messages are secure and specific to authenticated users, especially useful for corporate environments.

### 6. **Notification Alerts**

Implement native Chrome notifications for high-priority messages to increase the visibility of important updates.

### 7. **Automated Testing**

Use Jest or another testing framework to create unit tests for React components. This will improve the robustness of the extension and help catch bugs early during development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out to the project maintainer at [maintainer@example.com].

---

This README provides detailed information on setting up, running, and improving the Chrome extension. It’s structured to provide clarity for developers or users who want to understand the workings of the extension, make contributions, or extend its functionality.
