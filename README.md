# chatbot-project# chatbot-project
Added Chatbot Functionality with Enhanced Responses for MIT Ujjain Website

Pull Request Description:
1. Summary of Changes:
This pull request adds a new chatbot functionality to the website, designed to answer frequently asked questions related to MIT Ujjain. The chatbot provides dynamic responses based on user input and can provide information about MIT’s history, courses, admission process, facilities, placements, and other related topics.

2. Key Features Added:
Chatbot UI Integration:

A simple chat interface with a user input field and response area.
The user can input queries, and the chatbot will respond dynamically based on predefined messages.
Chatbot Responses:

Added responses for over 50 different questions related to MIT Ujjain, covering:
General Information: About MIT, History, Vision, Courses, Admission Process, etc.
Facilities: Library, Hostel, Canteen, Sports, Infrastructure, etc.
Academic Information: Faculty, Research, Scholarships, and more.
Placement and Achievements: Placement statistics, recruiters, and placement records.
Other FAQs: Events, Entrepreneurship, Social Responsibility, Alumni, etc.
JavaScript Functions:

sendMessage(): Sends a message from the user and gets the bot response.
displayMessage(): Displays both user and bot messages in the chat UI.
getBotResponse(): Processes the user query and returns an appropriate response based on predefined conditions.
3. Files Modified:
chatbot.js:
Main functionality: Includes all JavaScript logic for handling user inputs, displaying messages, and generating appropriate responses.
Added responses for 50+ different user queries.
index.html (or the relevant HTML file):
Integrated the chatbot UI within the webpage.
Added an input field for users to type queries and a display area for chat responses.
styles.css (or any CSS file):
Styled the chat interface for better usability and appearance (optional if done).
4. User Input Handling:
The chatbot is designed to process and handle queries typed by the user in natural language. It uses a simple string matching technique to determine the appropriate response.
Queries such as "What are the courses?", "Tell me about the history of MIT", "What are the admission requirements?" will be handled based on the user's request.
5. How the Chatbot Works:
When a user types a query and presses "Enter" or clicks the send button, the chatbot processes the message and checks if the query matches any of the predefined keys.
If a match is found, the bot responds with relevant information stored in the infoMessages object.
If no match is found, a default message with a link to MIT Ujjain's official website is displayed.
6. Additional Changes:
Responsiveness: The chatbot is designed to be responsive, ensuring it works well on both desktop and mobile devices.
Message Delay: A small delay has been added before the bot responds, simulating real-time chat interaction.
7. Testing Instructions:
Navigate to the page containing the chatbot.
Test the chatbot by typing a variety of questions related to MIT Ujjain (e.g., “What is the fee structure?”, “Tell me about the placement record”).
Ensure that the chatbot responds with relevant information.
Test the responsiveness of the chat UI on both desktop and mobile devices.
8. Dependencies:
No additional libraries or frameworks are required. This functionality relies on basic JavaScript and HTML/CSS.
9. Screenshots / Visuals:
(Optional: Attach a screenshot or gif showing how the chatbot works after the changes.)
