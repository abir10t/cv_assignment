const state =  {
    cvList:[]
}

const getters =  {
    cvList : ({cvList}) => cvList
}

const mutations =  {
    SET_CV: (state, cv) => {
        state.cvList.push(cv)
    },
    DELETE_CV:(state, id) => {
       state.cvList = state.cvList.filter(cv => cv.id !== id)
    }
}


export default {
  namespaced: true,
  getters,
  mutations,
  state
}
