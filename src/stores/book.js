import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore("book", {
  state: () => ({
    books: [],
  }),
  getters: {},
  actions: {
    getAllBooks() {
      let res = axios.get("http://127.0.0.1:8000/api/books/");
      this.books = res.data;
      return this.books;
    },
  },
});
