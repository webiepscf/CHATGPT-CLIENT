import { createPinia } from 'pinia';

export const setupStore = app => {
  app.use(createPinia());
};

export const useChatStore = () => {
  return useStore('chat');
};
