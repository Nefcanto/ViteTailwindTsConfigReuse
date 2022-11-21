import {
    component$,
    Resource,
    Slot,
} from '@builder.io/qwik';
import { useEndpoint } from "@builder.io/qwik-city";

export default component$(() => {
    return <>
        <h1>Header</h1>
        <Slot />
        <p>Footer</p>
    </>
});
