import { defineStore } from 'pinia';

export const useChatStore = defineStore({
    id: 'chat',
  
    state: () => ({
      chats: JSON.parse(localStorage.getItem('chats')) || [],
      activeChatID: JSON.parse(localStorage.getItem('activeChatID')) || null,
      pinnedNotes: JSON.parse(localStorage.getItem('pinnedNotes')) || []
    }),

    getters: {
      activeChat: (state) => state.chats.find(chat => chat.id === state.activeChatID),
    },
  
    actions: {
      addChat(chat) {
        this.chats.push(chat);
        this.saveChats();
      },
  
      setActiveChatID(chatID) {
        this.activeChatID = chatID;
        localStorage.setItem('activeChatID', JSON.stringify(chatID));
      },
  
      addPinnedNote(note) {
        this.pinnedNotes.push(note);
        this.savePinnedNotes();
      },

      saveChats() {
        localStorage.setItem('chats', JSON.stringify(this.chats));
      },
  
      savePinnedNotes() {
        localStorage.setItem('pinnedNotes', JSON.stringify(this.pinnedNotes));
      }
    }
  });
