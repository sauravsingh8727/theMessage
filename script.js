const messageInput = document.getElementById("message-input");

const messageOutput = document.getElementById("message-output");

document.getElementById("bt").addEventListener("click", function () {
  if (messageInput) {
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = "";
  }
});
