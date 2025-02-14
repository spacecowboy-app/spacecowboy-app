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

"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Container from "@mui/material/Container";

import ApplicationFooter from "./ApplicationFooter";
import ApplicationHeader from "./ApplicationHeader";


interface Props {
    children: JSX.Element;
}


/**
 * Layout for the application screen.
 * The screen consists of an ApplicationHeader, the route component and an ApplicationFooter.
 */
export default function Layout(props: Props): JSX.Element
{
    const pathname = usePathname();

    return (
        <div style={{ display: "grid", minHeight: "98vh", gridTemplateRows: "auto 1fr auto", gap: 16 }} >
            <ApplicationHeader />
            <Container maxWidth="xl">
                { props.children }
            </Container>
            { pathname == "/" ? <ApplicationFooter /> : <></> }
        </div>
    );
}
