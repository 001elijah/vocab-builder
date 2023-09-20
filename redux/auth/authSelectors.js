export const selectAuthorized = (state) => Boolean(state.authorized.user.token);
export const selectUser = (state) => state.authorized.user;
export const selectUserToken = (state) => state.authorized.user.token;
export const selectError = (state) => state.authorized.error;
