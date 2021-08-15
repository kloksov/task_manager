
export const getDirs = store => store.dirs;

export const getMaxId = store => {
    let max_id = 0;

    store.dirs.forEach(el => {
        if (el.id > max_id) {
            max_id = el.id;
        }
    });

    return max_id;
};

export const getDirOnId = (store, dir_id) => {
    return store.dirs.find(el => el.id == dir_id);
};