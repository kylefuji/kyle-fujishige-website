'use strict';

const e = React.createElement;

var posts = JSON.parse(document.getElementById('home-posts').textContent);

import HeroSection from "/static/js/components/hero.js";

export default class Home extends React.Component {
    render() {
        var items = []
        var counter = 0;
        posts.forEach((post) => {
            items.push(e(HeroSection, {post: post, key: (post.title, post.content)}, {theme:this.props.children.theme, post: post, count: counter}));
            counter++;
        })
        return(
            e("div", null, 
                items
            )
        );
    }
}

