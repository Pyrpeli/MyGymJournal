const Entry = (props) => (
        <article className="journal-entry">
            <div className="entry-image-container">
            <img 
            className="journal-entry-image" 
            src={props.img.src} 
            lt={props.img.alt}
            />
            </div>
            <div className="entry-info-container">
                <img
                    className="category"
                    src={props.category.src} 
                    alt={props.category.alt}
                    />

                <span className="location"> {props.location} </span>
                <h3 className="date">{props.date}</h3>
                <h4 className="entry-title"> {props.title} </h4>
                <span className="text"> {props.text} </span> 
            </div>
        </article>
)

export default Entry