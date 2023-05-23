<template>
  <div class="overflow-y-auto">
    <!-- Pinned notes -->
    <div v-for="note in pinnedNotes" :key="note.id">
      <div class="p-4 flex justify-between items-center border-b">
        <div>{{ note.content }}</div>
        <button @click="deleteNote(note)" class="text-sm text-red-500">
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
const pinnedNotes = chatStore.pinnedNotes;

const deleteNote = (note) => {
  const index = pinnedNotes.indexOf(note);
  if (index > -1) {
    pinnedNotes.splice(index, 1);
    chatStore.savePinnedNotes();
  }
};
</script>
