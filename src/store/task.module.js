export default {
  state: {
    open: [
      {
        title: 'Başlık',
        description: 'Açıklama',
      },
      {
        title: 'Başlık1',
        description: 'Açıklama1',
      },
    ],
    progress: [],
    close: [],
  },
  mutations: {
    addOpenTask: (state, data) => state.open.push(data),
    addProgressTask: (state, data) => state.progress.push(data),
    addCloseTask: (state, data) => state.close.push(data),
  },
  actions: {
  },
  getters: {
    getOpenTask: (state) => state.open,
    getProgressTask: (state) => state.progress,
    getCloseTask: (state) => state.close,
  },
};
