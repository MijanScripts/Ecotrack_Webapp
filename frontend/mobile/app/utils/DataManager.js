// Global data manager to sync data across the app
class DataManager {
  constructor() {
    this.listeners = [];
  }

  // Emit data update event
  notifyDataUpdate() {
    this.listeners.forEach(callback => callback());
  }

  // Subscribe to data updates
  onDataUpdate(callback) {
    this.listeners.push(callback);
  }

  // Unsubscribe from data updates
  offDataUpdate(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }
}

export default new DataManager();