import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.';

export interface UiState{
   isMenuOpen: boolean;
}

const Ui_Initial_State: UiState = {
   isMenuOpen: false
}

interface provider{
   children: React.ReactNode
}

export const UiProvider: FC<provider> = ({children}) => {
   const [state, dispatch] = useReducer(uiReducer, Ui_Initial_State);

   const toogleSideMenu = () => {
    dispatch({type: 'toogleMenu'})
   }

   return (
      <UiContext.Provider value={{
         ...state,
         toogleSideMenu
      }}>
         {children}
      </UiContext.Provider>
   )
}