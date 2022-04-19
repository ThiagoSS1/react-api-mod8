import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import apiExport from 'app/services/api/apiExport';

export const getOne = createAsyncThunk('message/getOne', async (id, { dispatch }) => {
    const response = await apiExport.getRecados(`/messages/${id}`);
    if (!response.success) {
        return response.data;
    }

    const { message } = await response.data;

    return { ...message };
});

export const saveOne = createAsyncThunk('message/saveOne', async (data, { dispatch}) => {
    const request = { ...data };

    const response = await apiExport.postRecados('/messages', request);
    if (!response.success) {
        dispatch(updateResponse(response.data));
        return data;
    }
    const { message } = await response.data;

    dispatch(getOne(message.uid));

    return {...data, message: response.message, success: res}

})

