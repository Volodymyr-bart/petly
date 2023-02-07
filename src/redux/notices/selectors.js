import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoadingNotices = state => state.notices.isLoadingNotices;

export const selectNotices = state => state.notices.notices;


export const selectSearchNotices = state => state.searchNotices;

export const selectFilteredNotices = createSelector(
    [selectNotices, selectSearchNotices], (notices, search) => {        
        return notices.filter(notice => notice.title.toLowerCase().includes(search.toLowerCase()));
    }
);