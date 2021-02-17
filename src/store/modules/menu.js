import Vue from 'vue'
import { router } from '@src/routes.js'

export default {
	namespaced: true,
	state: {
        menu: []
	},
	getters: {
        getMenuItems: state => {
            let menuItems = state.menu.map((item)=> {
                return {
                    id: item.id,
                    title: item.menu_title,
                    subtitle: item.menu_subtitle
                };
            });
            return menuItems;
        },
        getPage: state => id => {
            let data =  state.menu.find( item => item.id == id)
            return data;
        },
	},
	mutations: {
        setMenu(state, data) {
            // отфильтруем повторяющиеся id
            let idArray = [];
            let dataArray = data.filter( item => {
                let isRepeat = idArray.find( id => item.id == id);
                if (!isRepeat) {
                    idArray.push(item.id);
                    return true;
                }
                return false;
            });
            state.menu = dataArray;
            router.push({path: '/' + state.menu[0].id})
        }
	},
	actions: {
        getData({commit, state}) {
            if(state.menu.length < 1) {
                let action = 'http://localhost:3000/menu';
                let method = 'get';
                Vue.http[method](action)
                    .then(response => response.json())
                    .then(data => {
                        commit('setMenu', data);
                    }, data => {
                    })
            }
        }
	}
};