import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { collection, getDocs, addDoc,doc, getDoc,  where, query, forEach } from "firebase/firestore";

import firebaseConfig from './firebaseConfig'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default {
    createGrades: async (folder) => {
        const addGrades = await addDoc(collection(db, "folders"), {
            title: folder?.title
        });
        console.log('list add saved 403', addGrades)
    },
    listGrades: async () => {
        let list = [];
        let folders = await getDocs(collection(db, "folders"));

        folders?.forEach((folder) => {
            list.push({ id: folder.id, ref: folder.ref, ...folder.data() })
        })
        const newList = await Promise.all(
            list.map(async (folder, index) => {

                const notes = await getDocs(collection(folder.ref, "notes"))

                return { ...folder, notesCount: notes?.size }
            }))
        return newList;
    },
    listNotesFromFolder: async (folderId) => {
        let list = [];
        const folder =  doc(collection(db, "folders"), folderId)
        const notes = await getDocs(collection(folder, "notes"))
        notes.forEach((note) => list.push(note.data()));
        return list;
    }
}


