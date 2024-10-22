 Introduction to AI-Powered Chatbots
## Fall 2024

Welcome to the practical component of Georgia Tech undergraduate course on computational media! This README serves as your guide to understanding, implementing, and experimenting with a simple yet powerful AI chatbot.

### Course Description

In this module, you will explore the fundamentals of creating an AI-powered chatbot using modern web technologies and API integration. This hands-on project will help you understand the intersection of artificial intelligence, web development, and user interface design.

### Learning Objectives

By the end of this module, you should be able to:

1. Implement a basic web-based chat interface using HTML, CSS, and JavaScript.
2. Integrate an AI language model (OpenAI's GPT-3.5) into a web application.
3. Understand and apply basic principles of API authentication and security.
4. Debug and troubleshoot issues in a full-stack web application.
5. Critically analyze the ethical implications of AI-powered conversational agents.

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with asynchronous programming concepts in JavaScript
- Understanding of HTTP requests and RESTful APIs

### Getting Started

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/GT-csail/ai-chatbot-intro.git
   ```

2. Open `index.html` in your preferred web browser.

3. Obtain an API key from OpenAI (instructions provided in class).

4. Enter your API key in the designated input field on the webpage.

### Project Structure

The entire project is contained within a single `index.html` file, which includes:

- HTML structure for the chat interface
- CSS styles for layout and design
- JavaScript for handling user input, API calls, and dynamic content updates

This structure was chosen for simplicity and ease of distribution, allowing you to focus on the core concepts without the complexity of a multi-file project setup.

### Key Components

1. **Chat Interface**: Examine the HTML structure and CSS styles that create the user interface.

2. **API Key Handling**: Notice how the API key is collected and used securely without being stored.

3. **API Integration**: Study the JavaScript function that sends requests to the OpenAI API and handles the responses.

4. **Error Handling and Logging**: Observe how errors are caught and displayed, and how console logging is implemented for transparency.

### Exercises

1. **Modify the chat interface**: Experiment with the CSS to create a unique design for your chatbot.

2. **Implement message history**: Modify the JavaScript to maintain a conversation history and send it with each API request for more context-aware responses.

3. **Add a "typing" indicator**: Create a visual cue that displays while waiting for the AI's response.

4. **Implement response streaming**: Research and implement the streaming capability of the OpenAI API for a more dynamic chat experience.

5. **Error analysis**: Intentionally cause errors (e.g., invalid API key, network issues) and observe how the application behaves. Improve the error handling if needed.

### Ethical Considerations

As you work with this AI-powered chatbot, consider the following ethical questions:

1. What are the implications of using AI models trained on internet data?
2. How might biases in the training data affect the chatbot's responses?
3. What responsibilities do developers have when creating AI-powered applications?
4. How can we ensure user privacy and data security when working with API keys and user inputs?

### Submission Guidelines

Your final submission should include:

1. Your modified `index.html` file with all improvements and additional features.
2. A brief report (max 2 pages) discussing:
   - The changes you made to the original code and why
   - Challenges you encountered and how you resolved them
   - Your reflections on the ethical considerations listed above

### Resources

- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Ethical AI: GT Course 6.S979 Notes](https://MIT-6-s979.github.io/)

### Academic Integrity

Remember, this project is an opportunity for learning and growth. While collaboration is encouraged, direct copying of code or ideas without understanding and personal contribution is against GT's academic integrity policies.

Good luck, and have fun exploring the world of AI-powered chatbots!

---

© 2024 Massachusetts Institute of Technology
