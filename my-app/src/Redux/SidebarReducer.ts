export type SidebarType = {
   key: number
   link: string
   name: string
}

type InitialStateType = {
   Sidebar: Array<SidebarType>
}

let initialState: InitialStateType = {
   Sidebar: [
      { key: 1, link: '/Profile', name: 'Profile' },
      { key: 2, link: '/Dialogs', name: 'Dialogs' },
      { key: 3, link: '/News', name: 'News' },
      { key: 4, link: '/Music', name: 'Music' },
      { key: 5, link: '/Friends', name: 'Friends' },
      { key: 6, link: '/Setting', name: 'Setting' },
   ]
}

let SidebarReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      default: return state
   }
}

export default SidebarReducer