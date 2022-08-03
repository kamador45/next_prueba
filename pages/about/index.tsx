import {NextPage} from "next";
import {MainLayout} from "../../Components/Layout/MainLayout";
import {DarkLayout} from "../../Components/Layout/DarkLayout";
import { FC, ReactNode } from "react";

export default function About () {
    return(
        <>
            <h1>About Page</h1>
        </>
    )
}

About.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
