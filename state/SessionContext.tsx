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

import { createContext, useReducer } from "react";
import log from "loglevel";


/**
 * Context for keeping track of the current session state.
 */
export interface SessionState {

    /** Session identifier, undefined when no session information retrieved from service. */
    readonly id: string|undefined;

    /** Set if current user is the sesison owner. */
    readonly owner: boolean|undefined;
}


enum SessionActionTypes {
    SET_OWNER = "SetOwner",
}


/**
 * Set this user as the owner of the session.
 * */
export const setSessionOwnerAction = () =>
    ({
        type: SessionActionTypes.SET_OWNER,
    } as const);



const initialSessionState: SessionState = {
    id: undefined,
    owner: undefined,
};

export const SessionContext = createContext<SessionState>(initialSessionState);
export const SessionDispatchContext = createContext<any>(null);

interface Props
{
    children: JSX.Element[]|JSX.Element
}


/**
 * Context provider for the theme variant.
 */
export function SessionProvider(props: Props): JSX.Element
{
    const [ sessionState, dispatch ] = useReducer(sessionStateReducer, initialSessionState);

    return (
        <SessionContext.Provider value={sessionState}>
            <SessionDispatchContext.Provider value={dispatch}>
                {props.children}
            </SessionDispatchContext.Provider>
        </SessionContext.Provider>
    );
}


/**
 * Reducer function for the session state context
 */
export function sessionStateReducer(session: SessionState, action: any): SessionState
{
    switch (action.type) {
        case SessionActionTypes.SET_OWNER: {
            log.debug(`Setting session owner status for session [${action.id}]`);
            return {
                ...session,
                owner: true,
            };
        }
        default:
            log.error(`Unknown action ${action.type}`);
            return session;
    }
}
