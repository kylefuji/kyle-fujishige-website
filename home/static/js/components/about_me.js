'use strict';

const e = React.createElement;

var posts = JSON.parse(document.getElementById('about-me-posts').textContent);

import HeroSection from "/static/js/components/hero.js";

export default class AboutMe extends React.Component {
    render() {
        var items = []
        var count = 0;
        posts.forEach((post) => {
            items.push(e(HeroSection, {post: post, key: (post.title, post.content)}, {theme:this.props.children.theme, post: post, count: count}));
            count++;
        })
        return(
            e("div", null, 
                items
            )
        );
    }
}

