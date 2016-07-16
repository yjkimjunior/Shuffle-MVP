import React from 'react';

class ProductItemSmall extends React.Component {

	renderUpvoteButton() {
		return (
			<a className="upvote-button upvote-button-medium" href="#">
				<span>
					<i className="fa fa-heart-o"></i>
				</span>

				{this.props.upvote}
			</a>
		);
	}

	renderHeadingSection() {
		return (
			<header className="tags">
				<a href="#"> {this.props.tags[0]} </a>
				<a href="#"> {this.props.tags[1]} </a>
				<a href="#"> {this.props.tags[2]} </a>
			</header>
		);
	}

	renderInfoSection() {

		return (
			<div>
			<div className="product-item-medium-info">
			{this.renderHeadingSection()}
				<a href="#">
					<h2 className="product-item-name">{this.props.name}</h2>
				</a>

				<p>{this.props.description}</p>
			</div>

			<div className="bottom-stick">
			<span className="product-item-price-medium"> {this.props.price} </span>
				<a href="#">
					<p className="medium-avatar-name"> {this.props.maker.name} </p>
					<img className="medium-avatar" src={this.props.maker.avatar} />
				</a>
			</div>

			</div>
		);

	}

	render() {

		return (

			<div className="col-xs-10 col-sm-12 col-md-8">
				{this.renderUpvoteButton()}
					<li className="product-item-medium">
						<img className="product-item-media col-sm-3 col-md-4 img-responsive " src={this.props.media[0]} />
						<img className="product-item-media col-sm-3 col-md-4 img-responsive" src={this.props.media[1]} />
						{this.renderInfoSection()}
					</li>
			</div>

		);
	}
}

export default ProductItemSmall;
