import { createStore } from 'vuex'
import books from "./books.json";

const store = createStore({
    state () {
        return {
            list: books,
            newBook: {},
            imgBook: '',
            filteredData: null,
            options: ['Country', 'Language'],
            filters: {
                country: [],
                language: [],
            },
            isFilter: false,
            names: ['New', 'Old', 'More...'],
            isParams: false,
        }
    },
    mutations: {
        getBookInfo (state, {img, obj}) {
            state.imgBook = img;
            state.newBook = obj;
        },
        toggleFilter(state) {
            state.isFilter = !state.isFilter
            if (state.isFilter === false) {
                state.filteredData = state.list
            }
        },
        filterByParams(state, name) {
            state.isParams = true;
            state.isFilter = false;
            state.list.forEach(object => {
                if (!state.filters.country.includes(object.country)) {
                    state.filters.country.push(object.country);
                }
                if (!state.filters.language.includes(object.language)) {
                    state.filters.language.push(object.language);
                }
            });
            state.filteredData = state.list.filter(
                data => {
                    if(name.toLowerCase() === 'new') {
                        return data.year > 1850 && data.year < 2000
                    }
                    if (name.toLowerCase() === 'old') {
                        return data.year < 1849
                    }
                    if (name.toLowerCase() === 'more...') {
                        state.isFilter = true;
                    }
                    return data.country === name
                        || data.language === name
                        || data.title === name
                        || data.year === name
                        || data.author === name
                        || data.pages === name
                        || data.country.toLowerCase().includes(name.toLowerCase())
                        || data.language.toLowerCase().includes(name.toLowerCase())
                        || data.title.toLowerCase().includes(name.toLowerCase())
                        || data.author.toLowerCase().includes(name.toLowerCase())
                }
            )
            if (name.toLowerCase() === 'delete params') {
                state.filteredData = null;
                state.isParams = false;
            }
        },
    },
});

export default store;