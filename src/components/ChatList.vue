<template>
  <div class="overflow-y-auto">
    <!-- Input for new chat -->
    <div class="p-4 border-b">
      <input
        v-model="newChatName"
        @keydown.enter="addChat"
        type="text"
        class="border p-2"
        placeholder="Add new chat..."
      />
    </div>

    <!-- List of chats -->
    <div v-for="chat in chats" :key="chat.id">
      <div class="p-4 flex justify-between items-center">
        <div>
          <a href="#" @click.prevent="setActiveChatID(chat.id)">{{
            chat.name
          }}</a>
        </div>
        <button @click.stop="deleteChat(chat)" class="text-sm text-red-500">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useChatStore } from "../store";

const chatStore = useChatStore();
const chats = computed(() => chatStore.chats);

const setActiveChatID = (chatID) => {
  chatStore.setActiveChatID(chatID);
};

const newChatName = ref("");

const addChat = () => {
  if (newChatName.value.trim()) {
    chatStore.addChat({
      id: Date.now(),
      name: newChatName.value,
      messages: [],
    });
    newChatName.value = "";
  }
};

const deleteChat = (chat) => {
  const index = chats.indexOf(chat);
  if (index > -1) {
    chats.splice(index, 1);
    chatStore.saveChats();
  }
};
</script>
