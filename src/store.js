import { createStore } from 'vuex'
import books from "./books.json";

const store = createStore({
    state () {
        return {
            data: books,
            newBook: {},
            imgBook: '',
            filteredData: null,
        }
    },
    mutations: {
        getBookInfo (img, obj) {
            this.newBook = obj;
            this.imgBook = img;
        },
        toggleFilter() {
            this.isFilter = !this.isFilter
            if (this.isFilter === false) {
                this.filteredData = this.data
            }
        },
        getParams(el) {
            this.filteredData = this.data.filter(
                data =>
                    data.country === el
                    || data.language === el
            );
            this.isFilter = false
        },
        filterByYear(name) {
            this.filteredData = this.data.filter(
                data => {
                    if(name.toLowerCase() === 'new') {
                        return data.year > 1850 && data.year < 2000
                    }
                    if (name.toLowerCase() === 'old') {
                        return data.year < 1849
                    }
                    if (name.toLowerCase() === 'more...') {
                        this.isFilter = true
                    }
                }
            )
        },
    }
});

export default store;