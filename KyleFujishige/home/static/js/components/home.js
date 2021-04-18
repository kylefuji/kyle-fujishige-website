'use strict';

const e = React.createElement;

import {SmallHeroSection, LargeHeroSection, MediumHeroSection} from "/static/js/components/hero.js";

export default class Home extends React.Component {
    render() {
        return(
            e("div", null, 
                e(LargeHeroSection, this.props, {theme:this.props.children.theme}),
                e(MediumHeroSection, this.props, {theme:this.props.children.theme}),
                e(SmallHeroSection, this.props, {theme:this.props.children.theme}),
                e(MediumHeroSection, this.props, {theme:this.props.children.theme})
            )
        );
    }
}

