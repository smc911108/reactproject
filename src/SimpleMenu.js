import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class SimpleMenu extends Component{

    constructor(){
        super();
        this.state={
            anchorE1:''
        }
    }

    handleClick=e=>{
        this.setState({
            anchorE1:e.currentTarget
        })
    }
    
    handleClose=(e)=>{
        console.log("메뉴버튼 id:"+e.target.id)
        this.setState({
            anchorE1:''
        })
    }
    
    render(){
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick(this)}>
                Open Menu
            </Button>
            <Menu id="simple-menu"
                anchorE1={this.state.anchorE1}
                keepMounted open={Boolean(this.state.anchorE1)}
                
                onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose} id="1">profile</MenuItem>
                    <MenuItem onClick={this.handleClose} id="2">My account</MenuItem>
                    <MenuItem onClick={this.handleClose} id="3">Logout</MenuItem>

                </Menu>
        </div>
    )
}
}

export default SimpleMenu;