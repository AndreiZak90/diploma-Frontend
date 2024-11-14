import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sortTrain } from "../setting";

export const fetchList = createAsyncThunk(
  "order/allTrain",
  async (direction) => {
    const response = await axios.get(
      `https://students.netoservices.ru/fe-diplom/routes?limit=15&from_city_id=${direction.cityEnd._id}&to_city_id=${direction.cityIn._id}&date_start=${direction.dateIn}&date_start_arrival=${direction.dateEnd}`
    );
    console.log(response.data.items);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    direction: {
      cityIn: {
        _id: "",
        name: "",
      },
      cityEnd: {
        _id: "",
        name: "",
      },
      dateIn: "",
      dateEnd: "",
    },
    setting: {
      first_class: false, // люкс
      second_class: false, // купе
      third_class: false, // плацкард
      fourth_class: false, // сидячие
      wifi: false, // наличие wifi
      express: false, // экспрес
      minPrice: "",
      maxPrice: "",
    },

    allTrain: [],
    massSetting: [],
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
        setting: { ...state.setting, ...action.payload },
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
        state.allTrain = action.payload.items;
        state.trainCount = action.payload.total_count;
        state.massSetting = sortTrain(state.allTrain, state.setting);
        state.loading = false;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.direction.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addValueDirection, addChecked } = orderSlice.actions;
export default orderSlice.reducer;
