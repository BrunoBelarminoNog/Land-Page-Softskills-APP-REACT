import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import "../styles/components/navbar.css"

const useStyles = makeStyles({
    root: {
        border: '3px solid',
        borderRadius: 15,
        borderColor: '#5222D0',
        color: '#551A8B',
        height: 44,
        padding: '0 15px',
        fontWeight: "bold"
    },
});

function Navbar() {
    let location = useLocation().pathname
    let oldLocation = ""

    function handleNavlinkDecoration() {
        let indicator: any = document.querySelector('.nav-indicator');
        let items = document.querySelectorAll('.nav-link');

        items.forEach(function (item: any) {
            if (item.className === 'nav-link is-active') {
                indicator.style.width = "".concat(item.offsetWidth, "px");
                indicator.style.left = "".concat(item.offsetLeft, "px");
            }
        });
    }

    window.onload = () => {
        handleNavlinkDecoration()
    }

    if ((location !== oldLocation || location === "/")) {
        setTimeout(() => {
            handleNavlinkDecoration()
        }, 300);
    }

    oldLocation = location

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <nav>
            <div>
                <h1 className="nav-logo">CRIE.ative</h1>

                <ul>
                    <li>
                        <NavLink to="/" exact={true} activeClassName="is-active" className="nav-link">início</NavLink>
                        <NavLink to="/referencias" activeClassName="is-active" className="nav-link">Inspire-se</NavLink>
                        <NavLink to="/ofuturo" activeClassName="is-active" className="nav-link">o Futuro</NavLink>
                        <span className="nav-indicator"></span>
                    </li>
                </ul>

                <Button className={classes.root} onClick={handleClickOpen}>
                    NEWSLETTER
                </Button >
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Se inscreva em nosso site</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Se inscreva para receber periodicamente em sua caixa de email dicas, novidades e conteúdos para se inspirar e desenvolver a criatividade em você!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Digite seu email"
                            type="email"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Fechar
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </nav>
    )
}

export default Navbar;