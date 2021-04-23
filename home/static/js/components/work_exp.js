'use strict';

const e = React.createElement;

var posts = JSON.parse(document.getElementById('work-exp-posts').textContent);

import HeroSection from "/static/js/components/hero.js";

export default class WorkExp extends React.Component {
    render() {
        var items = [e("br", {key: 0})]
        var counter = 0;
        posts.forEach((post) => {
            items.push(e(HeroSection, {post: post, key: post.id}, {theme:this.props.children.theme, post: post, count: counter}));
            counter++;
        })
        return(
            e("div", null, 
                items
            )
        );
    }
}

