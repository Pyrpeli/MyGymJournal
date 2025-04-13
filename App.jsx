import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


const App = () => {
    const entries = data.map(entry => {
        return <Entry id={entry.id} 
            img={entry.img} 
            category={entry.category} 
            date={entry.date} 
            title={entry.title} 
            location={entry.location} 
            text={entry.text} />
    })
    return (
        <>
        <Header />
<main className="entries">
    {entries}
</main>
</>
    )
}
export default App
