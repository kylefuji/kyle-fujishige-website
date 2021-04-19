'use strict';

const e = React.createElement;

class NavBarItem extends React.Component {
    render() {
        return (
            e("a", {className: "navbar-item", id: this.props.item.tab, onClick: this.props.children.changeTab},
                this.props.item.icon === null ? null : e("img", {src: this.props.item.icon, alt: "", width:"32px", height:"32px", className:"mr-2"}),
                this.props.item.name
            )
        );
    }
}

class NavBarBrand extends React.Component {
    render() {
        var items = []
        this.props.navData.forEach((item) => {
            if (item.brand) {
                items.push(e(NavBarItem, {item: item, key: item.name}, {changeTab: this.props.children.changeTab}))
            }    
        })
        return (
            e("div", {className: "navbar-brand"},
                items,
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
                items.push(e(NavBarItem, {item: item, key: item.name}, {changeTab: this.props.children.changeTab}))
            }    
        })
        return (
            e("div", {className: "navbar-menu", id:"navbarToggleMenu"}, 
                e("div", {className: "navbar-start"},
                    items
                ),
                e("div", {className: "navbar-end"},
                    e("a", {className: "navbar-item", id:"toggle-theme", onClick: this.props.children.toggleTheme}, `${this.props.children.theme === "is-light" ? "Dark Mode" : "Light Mode"}`)
                )
            )
        );
    }
}

export default class NavBar extends React.Component {
    render() {
        return(
            e("nav", {className: "navbar is-fixed-top " + `${this.props.children.theme === "is-light" ? "is-info" : "is-black"}`, role:"navigation", 'aria-label':"main-navigation"},
                e(NavBarBrand, this.props, {changeTab: this.props.children.changeTab}),
                e(NavBarMenu, this.props, {toggleTheme: this.props.children.toggleTheme, theme:this.props.children.theme, changeTab: this.props.children.changeTab})
            )
        );
    }
}