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

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/images/hero/welcome.png";


export default function Home(): JSX.Element {
    return (
        <Stack spacing={2} alignItems="center">
            <Image src={HeroImage} alt="Welcome to Spacecowboy" />
            <Typography variant="h1">Welcome Space Cowboy</Typography>
            <Typography variant="h3">Name your space, select a deck and</Typography>
            <Typography variant="h3">start a game of agile decision making</Typography>
            <Stack spacing={2} direction="row">
                <Button variant="contained" href="/start" LinkComponent={Link}>start a game</Button>
                <Button variant="contained" href="/join" LinkComponent={Link}>join a game</Button>
            </Stack>
        </Stack>
    )
}
