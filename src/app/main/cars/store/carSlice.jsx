import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import ApiService from 'app/services/api';

export const getOne = createAsyncThunk('car/getOne', async (id, { dispatch }) => {
    const response = await ApiService.doGet(`/cars/${id}`);
})
