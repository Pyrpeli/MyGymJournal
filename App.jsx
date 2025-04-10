import {Header} from "./components/Header"
import { Entry } from "./components/Entry"

export const App = () => (
<>
<Header />
<Entry
    img ={{
        src:"salikuvatornio.jpg",
        alt: "picture of a gym"
        }}
    category = {{
        src: "kettlebell.png",
        alt: "kettlebell icon"
            }}
    date = "08.04.2025"
    title ="Pushday -treeni"
    location ="Bodycenter Tornio"
    text ="
Pystypunnerrus 3x5
Penkkipunnerrus 3x8
Vinopenkki käsipainoilla 3x8
Ranskalainen punnerrus 3x10
Vipunosto 3x20
Ojentajat taljassa 3x10"     
/>

</>
)
