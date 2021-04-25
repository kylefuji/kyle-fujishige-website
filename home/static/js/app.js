'use strict';

const e = React.createElement;

import NavBar from "/static/js/components/nav_bar.js";
import Home from "/static/js/components/home.js";
import AboutMe from "/static/js/components/about_me.js";
import WorkExp from "/static/js/components/work_exp.js";
import Projects from "/static/js/components/projects.js";
import Contact from "/static/js/components/contact.js";
import HeroSection from "/static/js/components/hero.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'is-black',
            tab: "home"
        };
    }

    toggleTheme() {
        this.setState({theme: this.state.theme === 'is-light' ? 'is-black' : 'is-light'})
    }

    handleClick(el) {
        this.setState({tab: el.target.id})
    }

    render() {
        const Router = ReactRouterDOM.HashRouter;
        const Route = ReactRouterDOM.Route;
        const Switch = ReactRouterDOM.Switch;
        const errMsg = {
                "title": "Something went wrong",
                "content": "Check the URL or select a new tab in the navigation bar.",
                "type": null,
                "size": "is-large",
                "imageUrl": null,
                "url": null,
                "urlDescription": null,
                "backgroundImageUrl": null
            }

        return (
            e(Router, null, 
                e(NavBar, this.props, {toggleTheme: this.toggleTheme.bind(this), theme:this.state.theme, changeTab: this.handleClick.bind(this)}),
                e(Switch, null, 
                    e(Route, {exact: null, path: "/", render: () => e(Home, this.props, {theme:this.state.theme})}),
                    e(Route, {path: "/work-exp", render: () => e(WorkExp, this.props, {theme:this.state.theme})}),
                    e(Route, {path: "/projects", render: () => e(Projects, this.props, {theme:this.state.theme})}),
                    e(Route, {path: "/about-me", render: () => e(AboutMe, this.props, {theme:this.state.theme})}),
                    e(Route, {path: "/contact", render: () => e(Contact, this.props, {theme:this.state.theme})}),
                    e(Route, {exact: null, path: "*", render: () => e("div", null, e("br"), e("br"), e(HeroSection, {post: errMsg}, {theme:this.state.theme, post: errMsg, count: 0}))})
                )
            )
        );
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
