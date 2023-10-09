const getStoredItemFromLS = () => {
    const storedItems = localStorage.getItem('booked-events');
    if (storedItems) {
        return JSON.parse(storedItems);
    }
    return [];
}

const isExistInLS = id => {
    const previousStoredItems = getStoredItemFromLS();
    const exists = previousStoredItems.find(itemId => itemId == id);
    if (exists) {
        return true;
    }
    return false;
}

const setItemToLS = id => {
    const previousStoredItems = getStoredItemFromLS();
    const newItems = [...previousStoredItems, id];
    localStorage.setItem('booked-events', JSON.stringify(newItems));
}

export { getStoredItemFromLS, isExistInLS, setItemToLS }