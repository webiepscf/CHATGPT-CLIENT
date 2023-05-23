<template>
  <div class="overflow-y-auto">
    <div v-if="activeChat">
      <!-- Display active chat -->
      <h1 class="text-2xl mb-4">{{ activeChat.name }}</h1>

      <!-- Messages -->
      <div v-for="message in activeChat.messages" :key="message.id">
        <div class="p-4 border-b">
          {{ message.content }}
          <button @click="pinNote(message)" class="ml-2 text-sm text-blue-500">
            Pin
          </button>
          <button
            @click.stop="deleteMessage(message)"
            class="text-sm text-red-500"
          >
            Delete
          </button>
        </div>
      </div>

      <!-- Message input -->
      <input
        v-model="newMessage"
        @keydown.enter="sendMessage"
        type="text"
        class="border mt-4 p-2"
        placeholder="Type your message here..."
      />
    </div>
    <div v-else>
      <p>Select a chat to start messaging.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useChatStore } from "../store";

const chatStore = useChatStore();
const activeChat = computed(() => chatStore.activeChat);

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim()) {
    const message = {
      id: Date.now(),
      content: newMessage.value,
    };
    chatStore.activeChat.messages.push(message);
    chatStore.saveChats();
    newMessage.value = "";
  }
};

const pinNote = (message) => {
  chatStore.addPinnedNote({
    id: Date.now(),
    content: message.content,
  });
};

const deleteMessage = (message) => {
  const index = activeChat.messages.indexOf(message);
  if (index > -1) {
    activeChat.messages.splice(index, 1);
    chatStore.saveChats();
  }
};
</script>
