import React from "react";
import "./Links.css";

const links = [
  {
    title: "Twitter Link",
    url: "https://www.twitter.com/Hardeborlaa",
    id: "twitter-link",
  },
  { title: "Zuri Team", url: "https://training.zuri.team/", id: "btn__zuri" },
  {
    title: "Zuri Books",
    subtext: "(This is where you will find books about design and coding)",
    url: "http://books.zuri.team",
    id: "books",
  },
  {
    title: "Python Books",
    subtext: "(This is where you will get the best python books)",
    url: "https://books.zuri.team/python-for-beginners?ref_id=Opeyemi Adeleye",
    id: "book__python",
  },
  {
    title: "Background Check For Coders",
    subtext: "(Your best place for doing background checks on coders)",
    url: "https://background.zuri.team/design-rules",
    id: "pitch",
  },
  {
    title: "Design Books",
    subtext: "(Get this free design book by Zuri)",
    url: "https://books.zuri.team/design-rules",
    id: "book__design",
  },
  {
    title: "Contact Me",
    subtext: "(Contact)",
    url: "/contact",
    id: "book__design",
  },
];

const Links = () => {
  return (
    <div className="links">
      {links.map((link, index) => (
        <a
          href={link.url}
          key={index}
          id={link.id}
          title={link.subtext}
          target="_blank"
        >
          <div className="link-container">
            {link.title}
            {link.subtext ? <div className="subtext">{link.subtext}</div> : ""}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
