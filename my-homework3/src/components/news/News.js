import classes from "./News.module.css"



function News () {
    return (
        <>
        <ul className={classes.News}>
            <li className={classes.link}>Home</li>
            <li className={classes.link}>About</li>
            <li className={classes.link}>Contacts</li>
            <li className={classes.link}>Friends</li>
            <li className={classes.link}>Login</li>
        </ul>
        </>
    )
}

export default News;