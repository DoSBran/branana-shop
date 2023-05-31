import { UiState } from '.';

type UiActionType = {type: 'toogleMenu'} 

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
   switch (action.type) {
      case 'toogleMenu':

         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
         }
      default:
         return state;
   }

   return state;
}