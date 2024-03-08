import { createStore } from 'vuex'

const state = {
    me: null,
};

const store = createStore({
    state,
    getters: {
        me: (state) => {
            return state.me;
        }
    },
    actions: {
        me(context, me){
            context.commit('me', me);
        }
    },
    mutations:{
        me(state, me){
            state.me = me;
        }
    }
});

export default store;