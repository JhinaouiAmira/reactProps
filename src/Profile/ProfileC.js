import React from "react";
import { Card,Button } from "react-bootstrap";
import PropTypes from 'prop-types';
function ProfileC({fullName,bio,profession,children}) {
    
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={children} style={{width:"150px",margin:"auto"}} />
        <Card.Body>
          <Card.Title>{fullName} </Card.Title>
          <Card.Text>
            {bio}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{profession} </small>
        </Card.Footer>
        <Button onClick={()=>alert('Amira jhinaoui')} style={{width:"150px",margin:"auto"}} >Alert</Button>
      </Card>
    </div>
  );
}

export default ProfileC;
ProfileC.defaultProps={
    fullName:"xxxx xxxxxxx" ,bio: "yyyyy" , profession:"zzzzzz"
}
ProfileC.propTypes={
  profession:PropTypes.string
}