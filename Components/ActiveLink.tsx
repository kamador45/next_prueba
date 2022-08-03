import Link from "next/link";
import {useRouter} from "next/router";
import { CSSProperties, FC } from "react";

const style:CSSProperties = {
    color:'#0070F3',
    textDecoration:'underline'
};

//define type with interface
interface Props {
    title:string;
    link:string;
};

export const ActiveLink: FC<Props> = (props) => {
    const router = useRouter();
    return(
        <Link href={props.link}>
            <a style={router.asPath === props.link ? style:undefined}>{props.title}</a>
        </Link>
    )
}