import {
    Resource,
    component$,
    useContextProvider,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useEndpoint } from "@builder.io/qwik-city";

export default component$(() => {
    return <div>Home page</div>
});

export const head = {
    title: 'Welcome to Qwik',
};
