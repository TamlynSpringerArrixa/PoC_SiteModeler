import { cacheExchange, createClient, fetchExchange } from "urql";

const client = createClient({
    url: "http://localhost:4000/api",
    exchanges: [cacheExchange, fetchExchange],
});

export default function useDataClient() {
    return client;
}