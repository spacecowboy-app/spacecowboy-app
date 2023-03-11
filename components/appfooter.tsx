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

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link"

import Configuration from "../Configuration";

import Github from "@/images/GitHub-Mark-64px.png";


export default function ApplicationFooter(): JSX.Element
{
    return (
        <>
            <Stack direction="row">
                <div>
                    <Typography>Space Cowboy</Typography>
                    <Typography>the place in space for fast decisions and great collaboration on the world wild web and the galaxy</Typography>
                    <Typography>No warranty. No personal data collected.</Typography>
                    <Typography>&copy; Copyright 2021-2023 Rolf Michelsen and Tami Weiss</Typography>
                    <Typography>Version {Configuration.AppVersion}</Typography>
                </div>
                <div>
                    <Link href="https://github.com/spacecowboy-app" >
                        <Image src={Github} alt="Github repository" />
                    </Link>
                </div>
                <div>
                    <Typography>Send feedback</Typography>
                    <Typography>Space Cowboy HQ</Typography>
                    <Typography>OSLO NORWAY</Typography>
                    <Link href="mailto:howdy@spacecowboy.app">howdy@spacecowboy.app</Link>                    
                </div>
            </Stack>
        </>
    );
}
