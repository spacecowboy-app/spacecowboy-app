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

import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import log from "loglevel";

import Charm from "./Charm";
import CharmGallery from "./CharmGallery";
import CategorySelector from "./CategorySelector";
import Avatar from "@/model/Avatar";
import Charmset from "@/model/Charmset";
import {getCharmsAsync} from "@/service/Service";


interface Props {
    /** Callback for creating an avatar. */
    avatarCreated?: (avatar: Avatar) => void,
}


/**
 * Avatar creator component.  Calls the `avatarCreated` callback when an avatar has been created.
 */
export default function AvatarCreator(props: Props): JSX.Element
{
    const [charmSets, setCharmSets] = useState<Charmset[]|undefined>();     // All available charm sets
    const [currentCharmSet, setCurrentCharmSet] = useState<string|undefined>();     // Name of currently selected charm set
    const [avatarName, setAvatarName] = useState<string|undefined>();       // Avatar name
    const [avatarCharm, setAvatarCharm] = useState<string|undefined>();     // Path to avatar charm, relative to `Constants.CharmsPath`.
    const [avatarNameError, setAvatarNameError] = useState<string|undefined>();     // Validation message for avatar name, or `undefined` when no error

    // Styling of the INPUT html element inside a TextField.
    const sx = {
        "input": {
            textAlign: "center",
        }
    };

    /* Get all charm sets. */
    useEffect(() => {
        if (!charmSets) {
            getCharmsAsync()
                .then(result => {
                    setCharmSets(result);
                    setCurrentCharmSet(result[0].name);
                    setAvatarCharm(result[0].charms[0]);
                    log.debug(`Got ${result.length} charm sets.`);
                })
                .catch(() => log.error("Unable to get any charm sets."));
        }
    }, [charmSets]);

    if (!charmSets || !currentCharmSet || charmSets.length === 0 || !avatarCharm) {
        return (<></>);
    }

    return (
        <Box component="form" onSubmit={(e:React.SyntheticEvent) => setAvatar(e)}>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h1">select your charm</Typography>
                <Charm charm={avatarCharm} variant="large" />
                <TextField id="avatar-name" value={avatarName ?? ""} error={avatarName !== undefined && avatarNameError !== undefined} label={avatarNameError ?? "make your name"} autoFocus={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateAvatarName(e)} sx={sx} />
                <CategorySelector categories={charmSets.map(c => c.name)} value={currentCharmSet} suppressIfSingle={true} categorySelected={(name) => setCurrentCharmSet(name)} />
                <CharmGallery charms={charmSets.find(s => s.name == currentCharmSet) ?? charmSets[0]} selectCharm={(name) => setAvatarCharm(name) } />
                <Button variant="contained" type="submit" disabled={avatarNameError !== undefined || avatarName === undefined}>arrive with charm</Button>
            </Stack>
        </Box>
    );


    /** Callback for changing the participant name text field.  */
    function updateAvatarName(e: React.ChangeEvent<HTMLInputElement>): void
    {
        setAvatarName(e.target.value);
        if (e.target.value.trim() === "") {
            setAvatarNameError("Please specify a name");
        }
        else {
            setAvatarNameError(undefined);
        }
    }


    /* Callback to register a participant with the selected avatar. */
    function setAvatar(e: React.SyntheticEvent): void
    {
        e.preventDefault();

        if (!avatarName || avatarName.trim() === "") {
            setAvatarNameError("Please specify a name");
            return;
        }

        if (props.avatarCreated) {
            if (avatarName && avatarCharm) {
                props.avatarCreated({ name: avatarName.trim(), charm: avatarCharm});
            }
            else {
                log.error("Attempting to create avatar with undefined name or charm.");
            }
        }
    }
}
