export const getFromLocalStorage = (key, defaultValue = []) => {
    const itemsFromLS = JSON.parse(localStorage.getItem(key));

    return !itemsFromLS ? defaultValue : itemsFromLS;
    // Below code is the same as the code above 
//     if (!itemsFromLS) {
//         return defaultValue;
//     } else {
//         return itemsFromLS;
//     }
// }
};