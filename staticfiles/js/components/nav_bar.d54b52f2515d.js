'use strict';

const e = React.createElement;

class NavBarItem extends React.Component {
    render() {
        const Link = ReactRouterDOM.Link;
        if (this.props.item.tab == "kyle" || this.props.item.tab == "home") {
            return (
                e(Link, {className: "navbar-item", id: this.props.item.tab, to: ""},
                    this.props.item.icon === null ? null : e("img", {src: this.props.item.icon, alt: "", width:"32px", height:"32px", className:"mr-2"}),
                    this.props.item.name
                )
            );
        } else {
            return (
                e(Link, {className: "navbar-item", id: this.props.item.tab, to: this.props.item.tab},
                    this.props.item.icon === null ? null : e("img", {src: this.props.item.icon, alt: "", width:"32px", height:"32px", className:"mr-2"}),
                    this.props.item.name
                )
            );
        }
    }
}

class NavBarBrand extends React.Component {
    render() {
        var items = []
        this.props.navData.forEach((item) => {
            if (item.brand) {
                items.push(e(NavBarItem, {item: item, key: item.id}))
            }    
        })
        return (
            e("div", {className: "navbar-brand"},
                items,
                e("a", {className: "navbar-item", href: "https://docs.google.com/document/d/1zVQOkt53KqbY2L2OmNI1xTGOQFTATTce/edit?usp=sharing&ouid=113440673074231349930&rtpof=true&sd=true"}, 
                    e("img", {src: "/static/icons/resume.svg", alt: "", width:"32px", height:"32px", className:"mr-2"}),
                    "Resumé"
                ),
                e("div", {className: "navbar-burger", "aria-label": "menu", "data-target":"navbarToggleMenu"},
                    e("span"),
                    e("span"),
                    e("span")
                )
            )
        );
    }
}

class NavBarMenu extends React.Component {
    render() {
        var items = []
        this.props.navData.forEach((item) => {
            if (!item.brand) {
                items.push(e(NavBarItem, {item: item, key: item.id}))
            }    
        })
        if (this.props.children.theme === "is-light") {
            return (
                e("div", {className: "navbar-menu", id:"navbarToggleMenu"}, 
                    e("div", {className: "navbar-start"},
                        items
                    ),
                    e("div", {className: "navbar-end"},
                        e("a", {className: "navbar-item", id:"toggle-theme", onClick: this.props.children.toggleTheme},
                            e("img", {src: "/static/icons/moon.svg", alt: "", width:"32px", height:"32px", className:"mr-2"}),
                            "Dark Mode"
                        )
                    )
                )
            );
        } else {
            return (
                e("div", {className: "navbar-menu", id:"navbarToggleMenu"}, 
                    e("div", {className: "navbar-start"},
                        items
                    ),
                    e("div", {className: "navbar-end"},
                        e("a", {className: "navbar-item", id:"toggle-theme", onClick: this.props.children.toggleTheme},
                            e("img", {src: "/static/icons/sun.svg", alt: "", width:"32px", height:"32px", className:"mr-2"}),
                            "Light Mode"
                        )
                    )
                )
            );
        }
    }
}

export default class NavBar extends React.Component {
    render() {
        return(
            e("nav", {className: "navbar is-fixed-top " + `${this.props.children.theme === "is-light" ? "is-info" : "is-black"}`, role:"navigation", 'aria-label':"main-navigation"},
                e(NavBarBrand, this.props),
                e(NavBarMenu, this.props, {toggleTheme: this.props.children.toggleTheme, theme:this.props.children.theme})
            )
        );
    }
}