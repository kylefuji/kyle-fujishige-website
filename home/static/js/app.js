'use strict';

const e = React.createElement;

import NavBar from "/static/js/components/nav_bar.js";
import Home from "/static/js/components/home.js";
import AboutMe from "/static/js/components/about_me.js";
import WorkExp from "/static/js/components/work_exp.js";
import Projects from "/static/js/components/projects.js";
import Contact from "/static/js/components/contact.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'is-black',
            tab: "home",
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.    
        return { hasError: true };  
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error, 
            errorInfo: errorInfo
        });
    }

    toggleTheme() {
        this.setState({theme: this.state.theme === 'is-light' ? 'is-black' : 'is-light'})
    }

    handleClick(el) {
        this.setState({tab: el.target.id})
    }

    render() {
        if (this.state.tab === 'home' || this.state.tab === 'kyle') {
            return(
                e("div", null, 
                    e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                    e(Home, this.props, {theme:this.state.theme})
                )
            );
        } else if (this.state.tab === 'work-exp') {
            return(
                e("div", null, 
                    e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                    e(WorkExp, this.props, {theme:this.state.theme})
                )
            );
        } else if (this.state.tab === 'projects') {
            return(
                e("div", null, 
                    e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                    e(Projects, this.props, {theme:this.state.theme})
                )
            );
        } else if (this.state.tab === 'about-me') {
            return(
                e("div", null, 
                    e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                    e(AboutMe, this.props, {theme:this.state.theme})
                )
            );
        } else if (this.state.tab === 'contact') {
            return(
                e("div", null, 
                    e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                    e(Contact, this.props, {theme:this.state.theme})
                )
            );
        } else if (this.state.hasError) {
            return(
                e("div", null, 
                    e("h2", null, "Something went wrong"),
                    e("Please refresh the page")
                )
            );
        }
    }
}

var navData = JSON.parse(document.getElementById('nav-data').textContent);
const domContainer = document.querySelector('#app');
ReactDOM.render(e(App, {navData: navData}), domContainer);


var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('#' + burger.dataset.target);
burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

var items = document.getElementsByClassName("navbar-item")
for(var item of items) {
    if (item.id != 'toggle-theme') {
        item.addEventListener('click', function() {
            window.scrollTo(0,0);
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        });
    } else {
        item.addEventListener('click', function() {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        });
    }
}
