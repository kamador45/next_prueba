import { NextPage } from "next";
import { ReactNode } from "react";
import { DarkLayout } from "../../Components/Layout/DarkLayout";
import { MainLayout } from "../../Components/Layout/MainLayout";

function Contact () {
    return(
        <>
            <h1>Contact Us</h1>
        </>
    )
}


Contact.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default Contact;