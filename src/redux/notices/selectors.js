import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoadingNotices = state => state.notices.isLoadingNotices;

export const selectNotices = state => state.notices.notices;

export const selectNoticesFavorite = state => state.notices.noticesFavorite;

export const selectNoticeAdd = state => state.notices.noticeAdd;


export const selectSearchNotices = state => state.searchNotices;

export const selectFilteredNotices = createSelector(
    [selectNotices, selectSearchNotices], (notices, search) => {
        
        return [...notices].sort((firstNotice, secondNotice) => new Date(secondNotice.updatedAt).getTime() - new Date(firstNotice.updatedAt).getTime())
            .filter(notice => notice.title.toLowerCase().includes(search.toLowerCase()));
    }
);

export const selectFilteredNoticesFavorite = createSelector(
    [selectNoticesFavorite, selectSearchNotices], (noticesFavorite, search) => {
        
        return [...noticesFavorite].sort((firstNotice, secondNotice) => new Date(secondNotice.updatedAt).getTime() - new Date(firstNotice.updatedAt).getTime())
            .filter(notice => notice.title.toLowerCase().includes(search.toLowerCase()));
    }
);