/*
    Copyright 2021-2025 Rolf Michelsen and Tami Weiss

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

import log from "loglevel";
import Configuration from "@/Configuration";
import { ThemeVariant } from "@/model/context/ThemeVariantContext";


const storageKeyTheme = Configuration.BrowserStorageKeyPrefix + "-theme";


/**
 * Store the theme variant setting in persistent storage.
 * @param theme Current theme variant.
 */
export function storeThemeState(theme: ThemeVariant)
{
    try {
        localStorage.setItem(storageKeyTheme, JSON.stringify(theme));
    }
    catch {
        log.warn("Unable to save theme state to browser storage.");
    }
}



/**
 * Retrieve the theme variant setting from persistent storage.
 * @returns Persisted theme variant
 */
export function getThemeState(): ThemeVariant
{
    try {
        const state = localStorage.getItem(storageKeyTheme);
        return state === null ? null : JSON.parse(state);
    }
    catch {
        log.warn("Unable to retrieve theme state from browser storage.");
        return "light";
    }
}
