export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
