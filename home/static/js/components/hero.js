'use strict';

const e = React.createElement;

const lightHeros = ["is-white", "is-link", "is-primary", "is-info"];
const darkHeros = ["is-dark", "is-dark is-light-dark"];

export default class HeroSection extends React.Component {
    render() {
        return(
            e("section", {className: "hero " + this.props.children.post.size +  " " +  `${this.props.children.theme === "is-light" ? lightHeros[this.props.children.count % 4] : darkHeros[this.props.children.count % 2]}`},
                e(HeroBody, this.props), 
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
        if (this.props.children.count % 2 == 1 && this.props.children.post.imageUrl != null && this.props.children.post.imageUrl != "") {
            return (
                e("div", {className: "container"},
                    e("div", {className: "columns level"},
                        e("div", {className: "column"},
                            e(HeroImage, this.props)
                        ), e("div", {className: "column"}, 
                            e(HeroTitle, this.props),
                            e(HeroSubTitle, this.props),
                            e(HeroLink, this.props)
                        )
                    )
                )
            );
        } else if (this.props.children.count % 2 == 0 && this.props.children.post.imageUrl != null && this.props.children.post.imageUrl != "") {
            return (
                e("div", {className: "container"},
                    e("div", {className: "columns level"},
                        e("div", {className: "column"}, 
                            e(HeroTitle, this.props),
                            e(HeroSubTitle, this.props),
                            e(HeroLink, this.props)
                        ), e("div", {className: "column"},
                            e(HeroImage, this.props)
                        )
                    )
                )
            );
        } else {
            return (
                e("div", {className: "container"},
                    e(HeroTitle, this.props),
                    e(HeroSubTitle, this.props),
                    e(HeroLink, this.props)
                )
            );
        }
    }
}

class HeroImage extends React.Component {
    render() {
        return(
            e("img", {alt: "", src: this.props.children.post.imageUrl, style:{'borderRadius': '100%'}})
        );
    }
}

class HeroLink extends React.Component {
    render() {
        return(
            e("a", {href: this.props.children.post.url}, this.props.children.post.urlDescription)
        );
    }
}


class HeroTitle extends React.Component {
    render() {
        var content = []
        if (this.props.children.post.title != undefined) {
            var lines = this.props.children.post.title.split("\n");
            lines.forEach((line) => {
                content.push(e("p", {className: "title"}, line))
            })
        }
        return(
            content
        );
    }
}

class HeroSubTitle extends React.Component {
    render() {
        var content = []
        if (this.props.children.post.content != undefined) {
            var lines = this.props.children.post.content.split("\n");
            lines.forEach((line) => {
                content.push(e("p", {className: "subtitle"}, line))
            })
        }
        return(
            content
        );
    }
}