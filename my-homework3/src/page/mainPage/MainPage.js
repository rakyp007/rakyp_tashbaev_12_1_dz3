import News from "../../components/news/News";
import React  from "react";
import "./mainpage.css"




class MainPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = ({menuNews: false})
        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu () {
        this.setState({menuNews: !this.state.menuNews})
   }

    render() { 
        return (
            <>
             

                
                {this.state.menuNews === true ?<News/> : ""}

<h1>Создавайте инкапсулированные компоненты с 
собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.

Поскольку логика компонента написана на JavaScript,
 а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по
 всему приложению и держать состояние вне DOM.</h1>
                <button className="menu" onClick={this.handleMenu}>click</button>
            </>
        
        )
    }
}
export default MainPage;