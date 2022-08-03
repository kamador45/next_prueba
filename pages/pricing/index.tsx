import { NextPage } from "next";
import { ReactNode } from "react";
import { DarkLayout } from "../../Components/Layout/DarkLayout";
import { MainLayout } from "../../Components/Layout/MainLayout";

function Pricing () {
    return(
        <>
            <h1>Pricing Page</h1>
        </>
    )
}

Pricing.getLayout = function getLayout(page:ReactNode) {
    return(
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Pricing;