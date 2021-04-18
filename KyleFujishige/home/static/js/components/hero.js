'use strict';

const e = React.createElement;

export class LargeHeroSection extends React.Component {
    render() {
        return(
            e("section", {className: "hero is-large " +  `${this.props.children.theme === "is-light" ? "is-info" : "is-dark"}`},
                e(HeroHead),
                e(HeroBody, this.props),
                e(HeroFoot)    
            )
        );
    }
}

export class MediumHeroSection extends React.Component {
    render() {
        return(
            e("section", {className: "hero is-medium " +  `${this.props.children.theme === "is-light" ? "is-primary" : "is-light-dark is-dark"}`},
                e(HeroHead),
                e(HeroBody, this.props),
                e(HeroFoot)    
            )
        );
    }
}

export class SmallHeroSection extends React.Component {
    render() {
        return(
            e("section", {className: "hero is-small " +  `${this.props.children.theme === "is-light" ? "is-success" : "is-dark"}`},
                e(HeroHead),
                e(HeroBody, this.props),
                e(HeroFoot)    
            )
        );
    }
}

class HeroHead extends React.Component {
    render() {
        return(
            e("div", {className: "hero-head"},
                // e(HeroContainer, this.props)
            )
        );
    }
}

class HeroFoot extends React.Component {
    render() {
        return(
            e("div", {className: "hero-foot"},
                // e(HeroContainer, this.props)
            )
        );
    }
}

class HeroBody extends React.Component {
    render() {
        return(
            e("div", {className: "hero-body"},
                e(HeroContainer, this.props)
            )
        );
    }
}

class HeroContainer extends React.Component {
    render() {
        return (
            e("div", {className: "container"},
                e(HeroTitle, this.props),
                e(HeroSubTitle, this.props)
            )
        );
    }
}


class HeroTitle extends React.Component {
    render() {
        return(
            e("p", {className: "title"}, 
                "Title"
            )
        );
    }
}

class HeroSubTitle extends React.Component {
    render() {
        return(
            e("p", {className: "subtitle"}, 
                "subtitle"
            )
        );
    }
}