'use strict';

const e = React.createElement;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'is-light'
        };
        this.homeUrl = props.homeUrl;
        this.teaIconUrl = props.teaIconUrl;
    }

    render() {
        return(
            e("nav", {className: "navbar " + this.state.theme, role:"navigation", 'aria-label':"main-navigation"},
                e("div", {className: "navbar-brand"},
                    e("a", {className: "navbar-item", href: this.homeUrl},
                        e("img", {src: this.teaIconUrl, alt: "", width:"32px", height:"32px", className:"mr-2"}),
                        "Kyle Fujishige"
                    ),
                    e("div", {className: "navbar-burger", "aria-label": "menu", "data-target":"navbarToggleMenu"},
                        e("span"),
                        e("span"),
                        e("span")
                    )
                ),
                e("div", {className: "navbar-menu", id:"navbarToggleMenu"}, 
                    e("div", {className: "navbar-start"},
                        e("a", {className: "navbar-item", href: this.homeUrl}, "Home"),
                        e("a", {className: "navbar-item", href: "#"}, "Work Exp."),
                        e("a", {className: "navbar-item", href: "#"}, "Projects"),
                        e("a", {className: "navbar-item", href: "#"}, "About Me")
                    ),
                    e("div", {className: "navbar-end"},
                        e("a", {className: "navbar-item", onClick: () => {this.state.theme === "is-light" ? this.setState({theme: "is-black"}) : this.setState({theme: "is-light"})}}, `${this.state.theme === "is-light" ? "Dark Mode" : "Light Mode"}`)
                    )
                )
            )
        );
    }
}
var homeUrl = document.currentScript.getAttribute('homeUrl');
var teaIconUrl = document.currentScript.getAttribute('teaIconUrl');
const domContainer = document.querySelector('#nav_container');
ReactDOM.render(e(NavBar, {homeUrl: homeUrl, teaIconUrl: teaIconUrl}), domContainer);

var burger = document.querySelector('.navbar-burger')
var menu = document.querySelector('#' + burger.dataset.target);
burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})