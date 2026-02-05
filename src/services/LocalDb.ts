export interface Song {
    id?: number,
    title: string,
    url: string,
    duration: number,
    image?: string,
}

const db_name = "prueba_1"
const db_version = 1

export const request = window.indexedDB.open(db_name, db_version);
export let db: IDBDatabase | null = null;

request.onupgradeneeded = () => {
    console.log('creando base de datos');

    db = request.result;
    const store = db.createObjectStore("songs", { keyPath: "id" });
    store.createIndex("title", "title", { unique: false });

    store.transaction.oncomplete = () => {
        console.log('todo bien');
    }
};

request.onerror = () => {
    console.log('error');
};

request.onsuccess = () => {
    console.log('todo bien');
    db = request.result;
};
