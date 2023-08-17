const initState = {
    themeId: 1,
}
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
export const themeReducer = (state = initState, action: ChangeThemeIdType) => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state, themeId: +action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number):ChangeThemeIdType  => ({type: 'SET_THEME_ID', id} ) // fix any
