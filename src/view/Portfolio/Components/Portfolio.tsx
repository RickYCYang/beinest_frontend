import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";

const Portfolio = () => {
    return (
    <div className='portfolio'>
        {
        
        <Card>
            <CardPrimaryContent>
                <h1>Header</h1>
                <CardMedia square imageUrl={require('../../../images/logo.png')} />   
            </CardPrimaryContent>

            <CardActions>
                <CardActionIcons>
                <i>Click Me Too!</i>
                </CardActionIcons>
            </CardActions>
        </Card>
        
        }
    </div>
    );
}

export default Portfolio;
