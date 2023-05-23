<template>
  <div class="flex h-screen bg-gray-200">
    <!-- Chat List - Left Sidebar -->
    <div class="flex-none p-4">
      <!-- Chat List will be displayed here -->
      <ChatList />
    </div>

    <!-- Chat Area - Center -->
    <div class="flex-1 bg-white p-4 bg-slate-500">
      <!-- Active Chat will be displayed here -->
      <ActiveChat />
    </div>

    <!-- Notes Area - Right Sidebar -->
    <div class="flex-none p-4">
      <!-- Pinned notes will be displayed here -->
      <PinnedNotes />
    </div>
  </div>
</template>

<script setup>
// Vue and Pinia code will be here
import ChatList from "./components/ChatList.vue";
import ActiveChat from "./components/ActiveChat.vue";
import PinnedNotes from "./components/PinnedNotes.vue";
</script>
