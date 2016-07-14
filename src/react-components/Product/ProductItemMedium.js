import React from 'react';

class ProductItemSmall extends React.Component {

	renderUpvoteButton() {
		return (
			<a className="upvote-button" href="#">
				<span>
					<i className="fa fa-sort-asc"></i>
				</span>

				{this.props.upvote}
			</a>
		);
	}

	// renderNewWindowIcon() {
	//
	// 	return (
	// 		<a className="product-item-link" href={this.props.link}>
	// 			<span> <i className="fa fa-external-link"></i> </span>
	// 		</a>
	// 	);
	//
	// }

	renderInfoSection() {

		return (
			<section className="product-item-medium-info">
				<a href="#">
					<h2 className="product-item-name">{this.props.name}</h2>
				</a>

				<p>{this.props.description}</p>

				<div className="bottom-stick">
					<a href="#">
						<p className="medium-avatar-name"> {this.props.maker.name} </p>
						<img className="medium-avatar" src={this.props.maker.avatar} />
					</a>
					{this.renderUpvoteButton()}
				</div>
			</section>
		);

	}

	render() {

		return (

			<div className="col-md-8">

					<li className="product-item-medium">

						<img className="product-item-media col-md-4" src={this.props.media[0]} />
						<img className="product-item-media col-md-4" src={this.props.media[1]} />
							
						{this.renderInfoSection()}

					</li>
			</div>

		);
	}
}

export default ProductItemSmall;