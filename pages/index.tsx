import {NextPage} from "next";
import {MainLayout} from "../Components/Layout/MainLayout";
import { ReactNode } from "react";

function Home () {
  return(
    <>
      <h1>Home App</h1>
    </>
  )
}

Home.getLayout = function getLayout (page: ReactNode) {
    return(
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Home;

