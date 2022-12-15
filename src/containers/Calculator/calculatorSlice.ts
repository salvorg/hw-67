import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '0',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    action: (state, action: PayloadAction<string>) => {
      try {
        if (state.value === '0') state.value = '';
        if (state.value.length >= 20) throw new Error('too much numbers');

        state.value += action.payload;
      } catch (e) {
        state.value = `${e}`;
      }
    },
    getTotal: (state) => {
      try {
        if (state.value === '0') {
          state.value = '0';
        } else {
          const total = eval(state.value);
          if (isNaN(total)) throw new Error('0');
          if (total !== Infinity) throw new Error('Infinity');
          if (total.toString().length >= 20) throw new Error('too much numbers');
          state.value = total;
        }
      } catch (e) {
        state.value = `${e}`;
      }
    },
    clear: (state) => {
      state.value = '0';
    },
    deleteLast: (state) => {
      state.value = state.value.toString().slice(0, -1);
      if (state.value.length === 0) state.value = '0';
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const {action, getTotal, clear, deleteLast} = counterSlice.actions;