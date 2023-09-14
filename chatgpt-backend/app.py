from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

# Set your OpenAI API key here
openai.api_key = "YOUR_API_KEY_HERE"

conversation = []

@app.route('/api/chat', methods=['POST'])
def chat():
    global conversation
    global language

    data = request.json
    user_message = data['message']
    temperature = 0.5
    retain_history = True
    language = data['language']
    print(retain_history)

    if retain_history:
        if language:
            initial_prompt = "Your next response will be in English.."
        else:
            initial_prompt = "Your next response will be in Hindi.."

        conversation.append({"role": "system", "content": initial_prompt})
        conversation.append({"role": "user", "content": user_message})

    else:
        if language:
            initial_prompt = "You are an expert in civil engineering, your next response will be in English.."
        else:
            initial_prompt = "You are an expert in civil engineering, your next response will be in Hindi.."
        
        conversation = [{"role": "system", "content": initial_prompt}]
        conversation.append({"role": "user", "content": user_message})    

    # Generate a response from OpenAI
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=conversation,
        temperature=temperature
    )

    ai_response = completion.choices[0].message['content']

    if retain_history:
        conversation.append({"role": "assistant", "content": ai_response})

    return jsonify({'message': ai_response})

@app.route('/api/set_language', methods=['POST'])
def set_language():
    global language
    data = request.json
    new_language = data['language']
    language = new_language
    return jsonify({'message': 'Language updated successfully'})

@app.route('/api/update_initial_prompt', methods=['POST'])
def update_initial_prompt():
    global initial_prompt
    data = request.json
    language = data['language']

    if language:
        initial_prompt = "You are an expert in civil engineering, you next response will be in english.."
    else:
        initial_prompt = "You are an expert in civil engineering, you next response will be in hindi.."

    return jsonify({'message': 'Initial prompt updated successfully'})

@app.route('/api/clear_chat', methods=['POST'])
def clear_chat():
    global conversation
    conversation = []  # Clear the conversation history
    return jsonify({'message': 'Chat history cleared'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)