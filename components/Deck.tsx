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

import Grid from "@mui/material/Unstable_Grid2";

import Card from "@/components/Card";
import CardModel from "@/model/Card";


interface Props {
    cards: CardModel[],
}


export default function Deck(props: Props): JSX.Element
{
    // TODO Use a proper key for the card components.
    return (
        <Grid container>
            { props.cards.map(c => <Grid key={c.value}><Card key={c.value} card={c}/></Grid>) }
        </Grid>
    );
}