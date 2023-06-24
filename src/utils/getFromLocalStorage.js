export const getFromLocalStorage = (key, defaultValue) => {
    const itemsFromLS = JSON.parse(localStorage.getItem("todoItems"));

    if (!itemsFromLS) {
        return defaultValue;
    } else {
        // returns items from Local Storage
    }
}