
let state = {
    profilePage:{
        posts:[
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hi, bla?', likesCount: 127},
            {id: 3, message: 'Hi, how are you?', likesCount: 129},
            {id: 4, message: 'Hi, how are you?', likesCount: 125},
            {id: 5, message: 'Hi, how are you?', likesCount: 1},
            {id: 6, message: 'It\'s my first post', likesCount: 11}
        ]
    },
    dialogsPage:{
             
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            { id: 1, name: "Dimych" },        
            { id: 2, name: "Andrew" },        
            { id: 3, name: "Sveta" },        
            { id: 4, name: "Sasha" },      
            { id: 5, name: "Viktor" },        
            { id: 6, name: 'Valera'} 
        ]
    },
    sidebar:{
        friends: [
            {id: 1, name: "Сета", img: "https://fanparty.ru/fanclubs/avatar-2009/gallery/83406_avatar_2009.jpg"},
            {id: 2, name: "Вовчик", img: "https://avatars.mds.yandex.net/get-zen_doc/1054867/pub_5cfb07b3f6c4ba00afebe5a5_5cfb07b8f6c4ba00afebe5a6/scale_1200"},
            {id: 3, name: "Барбос", img: "http://fanaru.com/avatar/image/240677-avatar-http-www-hdwallpapers-in-walls-jake_sully_avatar_disguise-wide-jpg.jpg"}
        ]
    }


    
  
}
export default state;