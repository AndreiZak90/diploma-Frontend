import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchList = createAsyncThunk(
  "order/settingTrain",
  async (direction) => {
    const response = await axios.get(
      `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${direction.cityEnd._id}&to_city_id=${direction.cityIn._id}&date_start=${direction.dateIn}&date_start_arrival=${direction.dateEnd}`
    );
    console.log(direction);
    console.log(response.data);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    direction: {
      cityIn: "",
      cityEnd: "",
      dateIn: "",
      dateEnd: "",
      first_class: false, // люкс
      second_class: false, // купе
      third_class: false, // плацкард
      fourth_class: false, // сидячие
      wifi: false, // наличие wifi
      express: false, // экспрес
      minPrice: "",
      maxPrice: "",
    },

    settingTrain: [],
    trainCount: "",
    loading: false,
    error: null,
  },
  reducers: {
    addValueDirection(state, action) {
      return {
        ...state,
        direction: { ...state.direction, ...action.payload },
      };
    },
    addChecked(state, action) {
      return {
        ...state,
        direction: { ...state.direction, ...action.payload },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = false;
        state.settingTrain = action.payload.items || [];
        state.trainCount = action.payload.total_count;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.direction.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addValueDirection, addChecked } = orderSlice.actions;
export default orderSlice.reducer;
