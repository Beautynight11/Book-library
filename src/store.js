import { createStore } from 'vuex'
import books from "./books.json";

const store = createStore({
    state () {
        return {
            list: books,
            newBook: JSON.parse(localStorage.getItem('newBook')),
            imgBook: JSON.parse(localStorage.getItem('imgBook')),
            accountInfo: JSON.parse(localStorage.getItem('accountInfo')),
            filteredData: null,
            options: ['Country', 'Language'],
            filters: {
                country: [],
                language: [],
            },
            names: ['New', 'Old', 'More...'],
            tableColumns: ['Image', 'Name', 'Author', 'Country', 'Year'],
            isParams: false,
            isRequest: false,
            isFilter: false,
            isAccount: JSON.parse(localStorage.getItem('isAccount')),
        }
    },
    mutations: {
        getBookInfo (state, {img, obj}) {
            state.imgBook = img;
            state.newBook = obj;
            localStorage.setItem('newBook', JSON.stringify(state.newBook));
            localStorage.setItem('imgBook', JSON.stringify(state.imgBook));
        },
        toggleFilter(state) {
            state.isFilter = !state.isFilter
            if (state.isFilter === false) {
                state.filteredData = state.list
            }
        },
        filterByCategory(state, name) {
            state.isParams = true;
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
                }
            )
            if (name.toLowerCase() === 'delete parameters') {
                state.filteredData = null;
                state.isParams = false;
                state.isRequest = false;
            }
        },
        filterByParams(state, param) {
            state.isParams = true;
            state.isFilter = false;
            state.filteredData = state.list.filter(
                data => {
                    if (typeof param === 'string') {
                        return data.country.toLowerCase().includes(param.toLowerCase())
                            || data.language.toLowerCase().includes(param.toLowerCase())
                            || data.title.toLowerCase().includes(param.toLowerCase())
                            || data.author.toLowerCase().includes(param.toLowerCase())
                    }
                    if (typeof param === 'number') {
                        return data.year.toString().includes(param)
                            || data.pages.toString().includes(param)
                    }
                }
            )
            state.filteredData.length <= 0 ? state.isRequest = true : state.isRequest = false;
        },
        getAccountInfo(state, {item, img}) {
            if (!localStorage.accountInfo) {
                state.accountInfo = [];
                state.accountInfo.push({ ...item, img});
            }
            if (localStorage.accountInfo && !localStorage.accountInfo.includes(item.Name)) {
                state.accountInfo.push({ ...item, img});
                state.isAccount = false;
            }
            localStorage.setItem('accountInfo', JSON.stringify(state.accountInfo));
            localStorage.setItem('isAccount', JSON.stringify(state.isAccount));
        },
        deleteFromLibrary(state, item) {
           state.accountInfo = state.accountInfo.filter(data => data.Name !== item.Name);
           localStorage.setItem('accountInfo', JSON.stringify(
               JSON.parse(localStorage.getItem('accountInfo'))
                   .filter(data => data.Name !== item.Name)));
            if (state.accountInfo.length === 0) {
                localStorage.setItem('isAccount', JSON.stringify(state.isAccount = true));
            }
        },
    },
});

export default store;