
export const getNotes = store => store.notes;

export const getMaxId = store => {
    let max_id = 0;

    store.notes.forEach(el => {
        if (el.id > max_id) {
            max_id = el.id;
        }
    });

    return max_id;
};

export const getNotesOnDirId = (store, dir_id) => {
    return store.notes.filter(el => el.dir_id == dir_id);
};