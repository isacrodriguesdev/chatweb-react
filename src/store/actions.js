
const initial = {
   openHome: true,
   openChat: false,
   openSettings: false,
   toggle_panel_mini: false,
   toggle_panel_emojis: false,
   toggle_chat_contact: false,
   toggle_panel_settings: false
}

const Types = {
   CLOSED_ALL_PANELS: "app/CLOSE_ALL_PANELS",

   OPENED_HOME:"main/OPENED_HOME",
   OPENED_CHAT:"main/OPENED_CHAT",
   OPENED_SETTINGS:"main/OPENED_SETTINGS",

   TOGGLE_PANEL_MINI: "profile/TOGGLE_PANEL_MINI",
   TOGGLE_PANEL_SETTINGS:"profile/TOGGLE_PANEL_SETTINGS",

   TOGGLE_PANEL_EMOJIS:"chat/TOGGLE_PANEL_EMOJIS",
   TOGGLE_CHAT_CONTACT:"menu/TOGGLE_CHAT_CONTACT",
}

export const Creators = {

   closeAllPanels: () => {
      return { type: Types.CLOSED_ALL_PANELS }
   },
   togglePanelMini: () => {
      return { type: Types.TOGGLE_PANEL_MINI }
   },
   togglePanelEmojis: () => {
      return { type: Types.TOGGLE_PANEL_EMOJIS}
   },
   openSettings: () => {
      return { type: Types.OPENED_SETTINGS }
   },
   openHome: () => {
      return { type: Types.OPENED_HOME }
   },
   openChat: () => {
      return { type: Types.OPENED_CHAT }
   }
}

export default function(state=initial, action) {

   const {type, payload} = action

   switch(type) {
      case Types.CLOSED_ALL_PANELS:
         return {
            ...state,
            toggle_panel_mini: false,
            toggle_panel_emojis: false,
         }
      case Types.TOGGLE_PANEL_MINI:
         return {...state, toggle_panel_mini: !state.toggle_panel_mini}
      case Types.TOGGLE_PANEL_EMOJIS:
         return {...state, toggle_panel_emojis: !state.toggle_panel_emojis}
      case Types.TOGGLE_PANEL_SETTINGS:
         return {...state, toggle_panel_settings: !state.toggle_panel_settings}
      case Types.OPENED_SETTINGS:
         return {
            ...state,
            openHome: false,
            openChat: false,
            openSettings: true,
         }
      case Types.OPENED_CHAT:
         return {
            ...state,
            openHome: false,
            openChat: true,
            openSettings: false,
         }
      case Types.OPENED_HOME:
         return {
            ...state,
            openHome: true,
            openChat: false,
            openSettings: false,
         }
      default: 
         return state
   }
}

