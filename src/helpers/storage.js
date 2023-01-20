export default {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key]),
  removeItem: jest.fn((key) => delete localStorage[key]),
  clear: jest.fn(() => (localStorage = {})),
};
