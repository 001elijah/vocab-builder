export const selectAuthorized = (state) => state.authorized.authorized;
export const selectUser = (state) => state.authorized.user;
export const selectUserToken = (state) => state.authorized.user.token;
export const selectError = (state) => state.authorized.error;
