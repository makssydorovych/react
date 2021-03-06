import {rerenderEntireTree} from "../render";
import Posts from "../components/Profile/MyPosts/Post/Posts";
import Message from "../components/Dialogs/Message/Message";
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {

}
type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
let state: RootStateType = {
    profilePage: {
        posts :[
            { id: 1, message: "Hello", likesCount:12},
            { id: 2, message: "hello World",likesCount:6},
            { id: 3, message: "hellodxxsxs",likesCount:14},
            { id: 4, message: "lorem ispum dolor",likesCount:1},

        ],
        newPostText: "Post Text"
    },
    messagesPage: {
        messages : [
            { id: 1, message: "Hello WORLD!!!!!" },
            { id: 2, message: "hello World" },
            { id: 3, message: "hellodxxsxs" },
            { id: 4, message: "lorem ispum dolor" },

        ],dialogs : [
            { id: 1, name: "Maksym" },
            { id: 2, name: "Maksym2" },
            { id: 3, name: "Maksym3" },
            { id: 4, name: "elf" },

        ],

    },
    sidebar:{
        friends: [
            { id: 1, name: "maks" },
            { id: 2, name: "maksym" },
            { id: 3, name: "zoia" }
        ]
    }


};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
state.profilePage.newPostText = newText;
rerenderEntireTree(state);
};
export default state;