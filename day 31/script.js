const chatList = document.getElementById("chatList");
const chatBody = document.getElementById("chatBody");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatWith = document.getElementById("chatWith");
const typingStatus = document.getElementById("typingStatus");
const toggleDarkMode = document.getElementById("toggleDarkMode");

let selectedUser = null;
let typingTimeout;

// sample users
const users = [
  { id: 1, name: "Dinesh", lastMessage: "Hello!" },
  { id: 2, name: "kumar", lastMessage: "Bye" },
  { id: 3, name: "dk", lastMessage: "Hey" },
];

// message for each user
const messages = {
  1: [],
  2: [],
  3: [],
};

// load chat list
function loadChatList() {
  chatList.innerHTML = "";
  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.className =
      "p-3 rounded-xl hover:bg-emerald-300 dark:hover:bg-emerald-800 cursor-pointer transition flex gap-2 items-center";
    userElement.innerHTML = `
      <div class='w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center'>
        🧑‍🦱
      </div>
      <div> 
        <div class='font-semibold text-emerald-700 dark:text-white'>${user.name}</div>
        <div class='text-sm text-gray-500 dark:text-gray-300'>${user.lastMessage}</div>
      </div>
    `;
    userElement.addEventListener("click", () => selectUser(user));
    chatList.appendChild(userElement);
  });
}

function selectUser(user) {
  selectedUser = user;
  chatWith.textContent = user.name;
  loadMesages();
  typingStatus.textContent = "";
}

function loadMesages() {
  chatBody.innerHTML = "";
  if (!selectedUser) return;

  messages[selectedUser.id].forEach((msg) => {
    const messageElement = document.createElement("div");
    messageElement.className = msg.formMe
      ? "flex justify-end "
      : "flex justify-start ";
    messageElement.innerHTML = `
      <div class="${
        msg.fromMe ? "bg-gray-500 text-white" : "bg-gray-300"
      } px-4 py-2 rounded-2xl max-w-xs break-words" >
        ${msg.text}
      </div>
    `;
    chatBody.appendChild(messageElement);
  });
  chatBody.scrollTop = chatBody.scrollHeight;
}

//send message

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "" || !selectUser) return;

  // console.log(selectedUser)
  messages[selectedUser.id].push({ text, formMe: true });
  messageInput.value = "";
  typingStatus.textContent = "";
  loadMesages();

  setTimeout(() => fakeReply(selectedUser.id), 1500);
}

// bot reply
function fakeReply(userId) {
  showTyping();
  setTimeout(() => {
    messages[userId].push({ text: "Hey Bro", formMe: false });
    if (selectedUser && selectedUser.id === userId) {
      loadMesages();
      typingStatus.textContent = "";
    }
  }, 2000);
}

// ...typing
function showTyping() {
  if (selectUser) {
    typingStatus.textContent = `
      ${selectedUser.name} is typing...
    `;
  }
}

// dark mode
toggleDarkMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
});

// inputs
messageInput.addEventListener('input', () => {
  if(selectUser) {
    clearTimeout(typingTimeout);
    typingStatus.textContent = 'you are typing...';
    typingTimeout = setTimeout(() => {
      typingStatus.textContent = '';
    }, 1000)
  }
});

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') sendMessage();
})

loadChatList();
