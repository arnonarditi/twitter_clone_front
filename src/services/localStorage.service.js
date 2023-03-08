export const localStorageService = {
    saveToStorage,
    loadFromStorage,
    clearStorage
}


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const items = localStorage.getItem(key)
    const res = items ? JSON.parse(items) : null
    return res
}

function clearStorage() {
    localStorage.clear()
}
