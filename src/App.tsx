import { Suspense } from "react";
import { SWRConfig } from "swr";
import styled from "styled-components";

import createFetcher from "configs/fetcher";

import Spinner from "components/atoms/Spinner";

import Routes from "Routes";

const swrConfig: object = {
    onErrorRetry: (
        error: any,
        key: any,
        option: any,
        revalidate: any,
        { retryCount }: any
    ) => {
        if (retryCount >= 3) return;
        if (error.response) {
            if (error.response.status === 404) return;
        }
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
    },
};

const Styled = {
    Wrapper: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

function App() {
    const fetcher = createFetcher("");

    return (
        <SWRConfig value={{ ...swrConfig, fetcher }}>
            <Styled.Wrapper>
                <Suspense fallback={<Spinner size={"10rem"} />}>
                    <Routes />
                </Suspense>
            </Styled.Wrapper>
        </SWRConfig>
    );
}

export default App;
