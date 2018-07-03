import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogActions,DialogContent} from 'react-mdl';



 class Dialogue extends Component{
   constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Exit</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle style={{fontFamily:'Oxygen'}} >Hey, Wait...</DialogTitle>
          <DialogContent style={{fontFamily:'Oxygen'}}>
            <p>Are,You sure you want to leave ?</p>
          </DialogContent>
          <DialogActions fullWidth>
            <Button style={{fontFamily:'Oxygen'}} type='button'>Yes</Button>
            <Button style={{fontFamily:'Oxygen'}} type='button' onClick={this.handleCloseDialog}>No, Continue</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
 export default Dialogue;
