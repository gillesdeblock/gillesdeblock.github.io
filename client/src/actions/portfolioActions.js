export function addWorkItem(item) {
    return {
        type: "ADD_ITEM",
        payload: item
    };
}