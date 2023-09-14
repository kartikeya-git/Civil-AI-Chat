# Civil Engineering Chatbot


Welcome to the Civil Engineering Chatbot GitHub repository! 

This web application is designed to provide a conversational interface for users to interact with a chatbot specialized in civil engineering topics. The chatbot is designed to help people with civil engineering education and can interact in both Hindi and English languages. 

Additionally, it offers a dark/light mode switch for user convenience and includes a FAQ feature to help users start conversations with the bot using predefined prompts (which can be customized through a JSON file). The application is built using React for the frontend and Flask for the Python backend using OpenAI API, making it a powerful and versatile tool for answering civil engineering queries. 

The model used for getting responses is the GPT 3.5 turbo, which allows for reduced prompt size, increased performance, and less token usage for the same cost.

![Screenshot1 of the Civil Engineering Chatbot](/images/screenshot.png)
![Screenshot2 of the Civil Engineering Chatbot](/images/screenshot2.png)
![Screenshot3 of the Civil Engineering Chatbot](/images/screenshot3.png)


## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### 1. Civil Engineering Expertise
The chatbot is trained to provide information and answers related to civil engineering topics. Whether you have questions about structural engineering, construction materials, or any other aspect of civil engineering, this chatbot can help.

### 2. Bilingual Support
Users can interact with the chatbot in both Hindi and English languages, making it accessible to a wider audience and facilitating communication in their preferred language.

### 3. Dark/Light Mode
The app offers a user-friendly interface with a dark/light mode switch, allowing users to customize their visual experience based on their preferences and lighting conditions.

### 4. FAQ Initialization
To help users get started, the chatbot includes a set of predefined prompts that can be used to initiate conversations. These prompts are customizable via a JSON file, making it easy to tailor the bot's responses to specific use cases or industries.

## Getting Started

### Prerequisites

- Node.js and npm (for React frontend)
- Python 3.x (for Flask backend)
- Git (optional but recommended)

### Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine (or download and unzip the ZIP file):
   ```bash
   git clone https://github.com/kartikeya-git/CivilGPT.git
   ```

2. Install the required dependencies for both the frontend and backend components. You can use `npm` for the frontend and `pip` for the backend:
   ```bash
   # Frontend
   cd chatapp
   npm install

   # Backend
   cd ../chatgpt-backend
   pip install -r requirements.txt
   ```

3. Set your OpenAI API key by replacing the "YOUR_API_KEY_HERE" with your own API key in the chatgpt-backend/app.py file (Line 9).
```bash
# chatgpt-backend/app.py

# Set your OpenAI API key here
openai.api_key = "YOUR_API_KEY_HERE"

```

![Screenshot of API key setup](/images/apikey.png)

4. If you do not have an OpenAI API key, then you can get it from OpenAI's website: 
    <ul>
    <li> Go to OpenAI's Platform website at platform.openai.com and sign in with an OpenAI account. </li>
    <li> Click your profile icon at the top-right corner of the page and select "View API Keys." </li>
    <li> Click "Create New Secret Key" to generate a new API key. </li>
    <li> Copy this key in the file at the line as described in the Step 3. </li>
    </ul>


## Customization

You can customize the chatbot's initial prompts and responses by editing the `faq.json` file located in the `backend` directory. Add, modify, or remove prompts as needed to suit your application's requirements.

## Usage

1. Start the Flask backend server.

   ```bash
   cd chatgpt-backend
   python app.py
   ```

2. In a separate terminal, start the React frontend development server.

   ```bash
   cd chatapp
   npm start
   ```

3. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Civil Engineering Chatbot.

Once the web app is running, you can interact with the Civil Engineering Chatbot:

1. Open the web app in your browser.
2. Choose your preferred language (Hindi or English) and mode (dark/light).
3. Initiate a conversation with the chatbot using the predefined prompts or by typing your questions directly.

Feel free to extend and enhance the chatbot's capabilities according to your needs.

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code is well-documented.
4. Test your changes thoroughly.
5. Submit a pull request with a clear description of your changes.

We appreciate your contributions to make this chatbot even more helpful for civil engineering enthusiasts and professionals.


## Acknowledgments

- Special thanks to OpenAI for their GPT-based models, which power the chatbot's responses.

Thank you for using the Civil Engineering Chatbot! If you have any questions or encounter issues, please feel free to open an issue in this repository.