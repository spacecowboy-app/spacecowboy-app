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

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link"

import Configuration from "@/Configuration";

import Github from "@/images/GitHub-Mark-64px.png";


export default function ApplicationFooter(): JSX.Element
{
    return (
        <Grid container spacing={2} borderTop={1} mt={6} pt={1} pb={1} pl={2} pr={2}>
            <Grid flexGrow={1}>
                <Box>
                    <Typography variant="h4">Space Cowboy</Typography>
                    <Typography pt={1}>The place in space for fast decisions <br/> and great collaboration on the world wild web and the galaxy</Typography>
                    <Typography pt={1}>No warranty. No personal data collected.</Typography>
                    <Typography variant="subtitle1" pt={1} pb={0}>Copyright 2021-2023 Rolf Michelsen and Tami Weiss</Typography>
                    <Typography variant="subtitle1" pt={0}>Version {Configuration.AppVersion}</Typography>
                </Box>
            </Grid>
            <Grid>
                <Box>
                    <Typography variant="h4">Send feedback</Typography>
                    <Typography pt={1}>Space Cowboy HQ</Typography>
                    <Typography>OSLO NORWAY</Typography>
                    <Link href="mailto:howdy@spacecowboy.app">
                        <Typography pt={1}>howdy@spacecowboy.app</Typography>
                    </Link>
                    <Box pt={0.8}>
                        <Link href="https://github.com/spacecowboy-app" >
                            <Image src={Github} alt="Github repository" width={32} />
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}