import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function addNewBook() {
  await addDoc(collection(db, "books"), {
    title: "Wie wir das Klima retten",
    author: "Bill Gates",
  });
}

export async function updateBook() {
  // TODO
}

export async function getAllBooks() {
  const books = [];
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    books.push(doc.data());
  });
  return books;
}
