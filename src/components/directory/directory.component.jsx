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
        },
        {
          title: "jacket",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 1,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 1,
        },
        {
          title: "woomens",
          imageUrl: "https://i.ibb.co/GCCdy8t/woomens.png",
          size: "large",
          id: 1,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 1,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuIterm
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
