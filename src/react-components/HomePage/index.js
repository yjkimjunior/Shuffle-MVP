import React from 'react';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      productList : [
        {
	  			id: 1,
		  		name: "Black Shoes",
		  		media: '/img/black-shoes.jpg',
		  		upvote: 169,
		  		description: "I've only worn these a few times, looking for a new owner",
          urgency: 3,
          price: "$10",
          expires: "Tomorrow at Noon",
		  		maker: {
		  			name: 'Satish Rao',
		  			avatar: '/img/rao.jpg'
		  		}
		  	},

        {
	  			id: 2,
		  		name: "Cookies For Charity at Sproul!",
		  		media: '/img/cal-cookies.jpg',
		  		upvote: 169,
		  		description: "Delta Delta Delta are holding a charity event for homeless people on Sproul! Come support! ",
          urgency: 9,
          price: "$1",
          expires: "5pm",
		  		maker: {
		  			name: "Nicole O'Shea",
		  			avatar: "/img/nicole.jpg"
		  		}
		  	}
      ]

    }
  }

  render() {
    return (
      <section>
					<section className="container">

						{
							this.state.productList
							?
							<ProductList productList={this.state.productList}/>
							:
							null
						}

					</section>
				</section>

    );
  }



}

export default HomePage;