'use strict';

const e = React.createElement;

const lightHeros = ["is-light", "is-light is-darker-light"];
const darkHeros = ["is-dark", "is-dark is-light-dark"];

export default class HeroSection extends React.Component {
    render() {
        if (this.props.children.post.backgroundImageUrl != null && this.props.children.post.backgroundImageUrl != "") {
            return(
                e("section", {style: {'position': 'relative', 'zIndex': '1'}, className: "hero " + this.props.children.post.size +  " " +  `${this.props.children.theme === "is-light" ? lightHeros[this.props.children.count % 2] : darkHeros[this.props.children.count % 2]}`},
                    e(HeroBody, this.props), 
                    e("div", {style: {'zIndex': '-1', 'opacity': '0.5', 'width': '100%', 'height':'100%', 'position': 'absolute', 'content': `url(${this.props.children.post.backgroundImageUrl})`}})
                )
            );
        } else {
            return(
                e("section", {className: "hero " + this.props.children.post.size +  " " +  `${this.props.children.theme === "is-light" ? lightHeros[this.props.children.count % 2] : darkHeros[this.props.children.count % 2]}`},
                    e(HeroBody, this.props)
                )
            );
        }
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
        if (this.props.children.post.imageUrl != null && this.props.children.post.imageUrl != "" && 
            this.props.children.post.url != null && this.props.children.post.url != "") {
            return (
                e("div", {className: "container"},
                    e("div", {className: "columns level"},
                        e("div", {className: "column"}, 
                            e(HeroTitle, this.props),
                            e(HeroSubTitle, this.props),
                            e(HeroCenteredLink, this.props)
                        ), e("div", {className: "column"},
                            e(HeroImage, this.props)
                        )
                    )
                )
            );
        } else if (this.props.children.post.url != null && this.props.children.post.url != "") {
            return (
                e("div", {className: "container"},
                    e(HeroTitle, this.props),
                    e(HeroSubTitle, this.props),
                    e(HeroLink, this.props)
                )
            );
        } else if (this.props.children.post.imageUrl != null && this.props.children.post.imageUrl != "") {
            return(
                e("div", {className: "container"},
                    e("div", {className: "columns level"},
                        e("div", {className: "column"}, 
                            e(HeroTitle, this.props),
                            e(HeroSubTitle, this.props)
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
                    e(HeroSubTitle, this.props)
                )
            );
        }
    }
}

class HeroImage extends React.Component {
    render() {
        return(
            e("div", {style: {justifyContent: "center", display: "flex"}}, 
                e("img", {alt: "", src: this.props.children.post.imageUrl})
            )
        );
    }
}

class HeroCenteredLink extends React.Component {
    render() {
        return(
            e("div", {style: {justifyContent: "center", display: "flex"}}, 
                e("a", {className: "button is-link", href: this.props.children.post.url, target: "_blank"}, this.props.children.post.urlDescription)
            )
        );
    }
}

class HeroLink extends React.Component {
    render() {
        return(
            e("a", {className: "button is-link", href: this.props.children.post.url, target: "_blank"}, this.props.children.post.urlDescription)
        );
    }
}

class HeroTitle extends React.Component {
    render() {
        var content = []
        if (this.props.children.post.title != undefined) {
            var lines = this.props.children.post.title.split("\n");
            var counter = 0;
            lines.forEach((line) => {
                content.push(e("p", {className: "title", key: counter}, line));
                counter++;
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
            var counter = 0;
            lines.forEach((line) => {
                content.push(e("p", {className: "subtitle", key: counter}, line));
                counter++;
            })
        }
        return(
            content
        );
    }
}