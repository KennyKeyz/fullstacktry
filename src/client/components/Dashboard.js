import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import query from  '../queries/CurrentUser';


class Dashboard extends Component{


  renderButtons(){
    const{ user}=this.props.data;

        if(user){
          return (
           <h2>welcome to the dashboard </h2>
           );
        }else {
          return(
            <h2>not authenticated </h2>
          );
        }
  }


render(){
return(
  <div>
  {this.renderButtons()}
  </div>

)




};
}

export default graphql(query)(Dashboard);
