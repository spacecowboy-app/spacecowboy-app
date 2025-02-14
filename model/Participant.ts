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

import Avatar from "./Avatar";

// TODO Document all properties
/**
 * Information about the participants in a session and their vote.
 * Note that vote can refer to the noVote or notRevealed cards.
 */
export default interface Participant {
    readonly id: string;
    readonly avatar: Avatar;
    readonly vote: string;
    readonly idle: number;
}
