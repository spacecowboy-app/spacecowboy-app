/*
    Copyright 2021-2023 Rolf Michelsen and Tami Weiss

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";
import ReducerException from "@/store/ReducerException";


enum Theme {
    Light,
    Dark,
}


interface ThemeselectorState {
    theme: Theme,
}


const initialState: ThemeselectorState = {
    theme: Theme.Light,
};


export const themeselectorSlice = createSlice({
    name: "themeselector",
    initialState,
    reducers: {
        toggle: (state) => {
            switch (state.theme) {
                case Theme.Light:
                    state.theme = Theme.Dark;
                    break;
                case Theme.Dark:
                    state.theme = Theme.Light;
                    break;
                default:
                    throw new ReducerException("Invalid value for theme in themeselector");
            }
        },
    },
});


export const { toggle } = themeselectorSlice.actions;
export const selectThemeselector = (state: RootState) => state.themeselector.theme;
export default themeselectorSlice.reducer;
