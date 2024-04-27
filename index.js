const config = require('./config');
const password = config.password;

const { BskyAgent } = require("@atproto/api");

async function sendPost(text) {
  const agent = new BskyAgent({ service: "https://bsky.social" });
  await agent.login({
    identifier: "faust-bot.bsky.social",
    password: password,
  });
await agent.post({ text });
}



const fs = require('fs');

// Path to the text file you want to read
const filePath = './quotes.txt';

// Function to read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Once the file is read, you can assign the data to a variable or use it as needed
  const fileContent = data;
  
  // Example: Log the content of the file
  console.log('File content:', fileContent);
  
  // Now you can perform any operations with the file content here


sendPost(fileContent);

});
