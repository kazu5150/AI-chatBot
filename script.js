// ユーザーからの入力を受け取り、応答を生成する関数
function generateResponse(message) {
    // ランダムな応答を生成する
    const responses = ["Hello!", "How are you?", "Nice to meet you!"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    
    // チャットボットの応答を返す
    return response;
  }
  
  // チャットボットUIの要素を取得する
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatbotMessages = chatbotContainer.querySelector(".chatbot-messages");
  const chatbotInput = chatbotContainer.querySelector(".chatbot-input input");
  const chatbotSendButton = chatbotContainer.querySelector(".chatbot-input button");
  
  // ユーザーからの入力を受け取り、応答を生成する
  function handleUserInput() {
    // ユーザーが送信したメッセージを取得する
    const message = chatbotInput.value;
    
    // メッセージが空でなければ、応答を生成して表示する
    if (message.trim() !== "") {
      // チャットボットの応答を生成する
      const response = generateResponse(message);
      
      // チャットボットの応答を表示する
      const messageElement = document.createElement("div");
      messageElement.classList.add("chatbot-message");
      messageElement.innerHTML = `
        <div class="chatbot-message-text">${response}</div>
      `;
      chatbotMessages.appendChild(messageElement);
      
      // メッセージボックスをクリアする
      chatbotInput.value = "";
    }
  }
  
  // ユーザーがメッセージを送信したときに、応答を生成する
  chatbotSendButton.addEventListener("click", handleUserInput);
  chatbotInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });
  