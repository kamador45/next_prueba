import {FC} from 'react';


interface Props {
    children: React.ReactNode;
}

export const DarkLayout: FC<Props> = ({children}) => {
    return(
        <div style={{backgroundColor:'rgba(0,0,0,0.5)', borderRadius:'5px', padding:'10px'}}>
            <h2>Dark Layout</h2>
            <div>
                { children }
            </div>
        </div>
    )
}