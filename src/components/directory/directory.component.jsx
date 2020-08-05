import React from "react";
import "./directory.styles.scss";
import MenuIterm from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jacket",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 1,
          linkUrl: "jacket",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 1,
          linkUrl: "sneakers",
        },
        {
          title: "woomens",
          imageUrl: "https://i.ibb.co/GCCdy8t/woomens.png",
          size: "large",
          id: 1,
          linkUrl: "woomens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 1,
          linkUrl: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuIterm key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
