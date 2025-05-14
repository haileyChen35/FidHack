 // Get the input field, button, and response div
 const userInput = document.getElementById('user-input');
 const submitBtn = document.getElementById('submit-btn');
 const responseDiv = document.getElementById('response');
 // When the button is clicked
 submitBtn.addEventListener('click', async () => {
     const prompt = userInput.value.trim();
     
// Check if the input is empty
 if (prompt === "") {
     alert("Please enter a question.");
     return;
 }
 // Show loading text
 responseDiv.textContent = "Thinking...";
 // Get response from ChatGPT
 const chatResponse = await getChatGPTResponse(prompt);
 responseDiv.textContent = chatResponse;
});
// Function to send request to OpenAI API
async function getChatGPTResponse(prompt) {
 const apiKey = sk-proj-_Xip4uvLEAiIprmsWm4qToc2;  // Replace with your OpenAI API key
 const apiUrl = 'https://api.openai.com/v1/completions';
 const requestBody = {
     model: gpt-4.1,  // GPT model to use
     prompt: prompt,
     max_tokens: 150,  // Limit the response length
     temperature: 0.7  // Creativity of the response
 };
 // Send POST request to OpenAI API
 const response = await fetch(apiUrl, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${apiKey}`,
     },
     body: JSON.stringify(requestBody),
 });
 // Parse the response and return the answer
 const data = await response.json();
 return data.choices[0].text.trim();
     }