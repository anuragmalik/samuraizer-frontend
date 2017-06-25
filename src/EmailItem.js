import React, { Component } from 'react';
import { Accordion, Image, Item } from 'semantic-ui-react'

class EmailItem extends Component {
  render() {
    const {
       avatar, metaData, subject, body, description
    } = this.props;

    return (
        <Accordion fluid>
          <Accordion.Title>
            	<Item>
      	      	<Item.Image size='tiny' src={avatar} />

      	      	<Item.Content>
      	        	<Item.Header as='a'>{subject}</Item.Header>
      	        	<Item.Meta>{metaData}</Item.Meta>
      	        	<Item.Description>
      	          	{description}
      	        	</Item.Description>
      	        	{/*<Item.Extra>Additional Details</Item.Extra>*/}
      	      	</Item.Content>
          	 </Item>
          </Accordion.Title>

          <Accordion.Content>
            <p style={{
              whiteSpace:'pre-line'
            }}>
              {body}
            </p>
          </Accordion.Content>
        </Accordion>
    );
  }
}

export default EmailItem;
