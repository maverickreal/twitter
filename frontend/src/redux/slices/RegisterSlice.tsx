import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DateInterface } from "../../utils";

interface RegisterSliceState {
    loading: boolean,
    error: boolean,
    firstName: string,
    firstNameValid: boolean,
    lastName: string,
    lastNameValid: boolean,
    email: string,
    emailValid: boolean,
    dateOfBirth: DateInterface,
    dateOfBirthValid: boolean
};

interface UpdatePayload {
    name: string,
    value: string | number | boolean
};

const initialState: RegisterSliceState = {
    loading: false,
    error: false,
    firstName: "",
    firstNameValid: false,
    lastName: "",
    lastNameValid: false,
    email: "",
    emailValid: false,
    dateOfBirth: { day: 0, month: 0, year: 0 },
    dateOfBirthValid: false
};

const slice = createSlice({
    name: 'register', initialState, reducers: {
        updateRegister: (state, action: PayloadAction<UpdatePayload>) => {
            const { name, value } = action.payload;
            if (name === 'day' || name === 'month' || name === 'year') {
                const dateOfBirth = {
                    ...state.dateOfBirth, [name]: value
                };
                state = { ...state, dateOfBirth };
            } else {
                state = {
                    ...state, [name]: value
                }
            }
            console.log('Updating the global state.', state);
            return state;
        }
    }
});

export const { reducer } = slice;
export const { updateRegister } = slice.actions;