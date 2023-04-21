import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("Hello I am a Constructor from NewsItem component.");
  // }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "87%", zIndex: 1 }}
            >
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unkown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
