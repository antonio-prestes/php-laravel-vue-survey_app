import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "Teste 123",
        slug: "teste-123",
        status: "draft",
        image:
            "https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        description: "Lorem impsun loren impsun lorenimpsun lo renmipsun",
        created_at: "2022-03-16",
        updated_at: "2022-03-16",
        expire_date: "2022-03-17",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "afd3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "b8a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 5,
                type: "text",
                question: "From which country are you",
                description: null,
                data: {}
            },
            {
                id: 6,
                type: "textarea",
                question: "From which country are you",
                description: null,
                data: {}
            }
        ]
    },{

        id: 102,
        title: "Teste 444",
        slug: "teste-123",
        status: "draft",
        image:
            "https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        description: "Lorem impsun loren impsun lorenimpsun lo renmipsun",
        created_at: "2022-03-16",
        updated_at: "2022-03-16",
        expire_date: "2022-03-17",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "afd3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "b8a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        {uuid: "23d3afa8-a595-11ec-b909-0242ac120002", text: "USA"},
                        {uuid: "32a490c0-a595-11ec-b909-0242ac120002", text: "Brazil"}
                    ]
                }
            },
            {
                id: 5,
                type: "text",
                question: "From which country are you",
                description: null,
                data: {}
            },
            {
                id: 6,
                type: "textarea",
                question: "From which country are you",
                description: null,
                data: {}
            }
        ]
    }
]

const store = createStore({

    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text","select","radio","checkbox","textarea"],
    },
    getters: {},
    actions: {
        register({commit}, user) {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data
                })
        },
        login({commit}, user) {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data
                })
        },
        logout({commit}) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.date = {}
            state.user.token = null
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token
            state.user.data = userData.user
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
})

export default store;
