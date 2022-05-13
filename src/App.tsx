import { Suspense } from "react";
import { QueryClientProvider, QueryClient, QueryFunctionContext } from "react-query";
import styled from "styled-components";

import createFetcher from "configs/fetcher";

import Spinner from "components/atoms/Spinner";

import Routes from "Routes";



const Styled = {
    Wrapper: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

function App() {
    const fetcher = createFetcher("");

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // 공통 config 설정
                refetchInterval: 3000,
                // 공통 fetch 함수 설정
                queryFn: ({ queryKey }: QueryFunctionContext) => fetcher(queryKey.join("")),
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <Styled.Wrapper>
                <Suspense fallback={<Spinner size={"10rem"} />}>
                    <Routes />
                </Suspense>
            </Styled.Wrapper>
        </QueryClientProvider>
    );
}

export default App;
