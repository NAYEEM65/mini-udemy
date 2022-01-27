import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    MenuItem,
    Tooltip,
    Button,
    Avatar,
    Container,
    Menu,
    Typography,
    IconButton,
    Toolbar,
    Box,
    Modal,
} from '@mui/material';
import Cart from '../Cart/Cart';

import logo from '../../Assets/images/logo-udemy.svg';
// import { makeStyles } from "@mui/styles";
import './Header.css';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = [
    {
        linkName: 'Profile',
        url: '/profile',
    },
    {
        linkName: 'Account',
        url: '/account',
    },
    {
        linkName: 'Dashboard',
        url: '/dashboard',
    },
    {
        linkName: 'Logout',
        url: '/logout',
    },
];

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#ffffff",
//     color: "black",
//   },
//   textWhite: {
//     color: "black",
//   },
// });

// modal

const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    // transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
};

const Header = (props) => {
    const { cart } = props;

    // const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#eceb98',
            },
            white: {
                main: '#fff',
            },
            black: {
                main: '#ddd',
            },
        },
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const OurModal = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {cart.length !== 0 ? (
                    <Container sx={style} id="modal-modal-title">
                        <Cart />
                    </Container>
                ) : (
                    <Box sx={style}>
                        <Typography variant="h5" id="modal-modal-title">
                            No cart item found
                        </Typography>
                    </Box>
                )}
            </Modal>
        );
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="sticky" color="black">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                <img className="our-logo" src={logo} alt="" />
                            </Typography>

                            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    color="black"
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography
                                                textAlign="center"
                                                style={{ color: 'black' }}
                                            >
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}
                            ></Typography>
                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#000', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <ThemeProvider theme={theme}>
                                <Box sx={{ flexGrow: 0.2 }} className="cart__space">
                                    <IconButton
                                        aria-label="cart"
                                        className="cartBtn"
                                        onClick={handleOpen}
                                    >
                                        <StyledBadge badgeContent={cart.length} color="secondary">
                                            <AddShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                    <OurModal /> {/*=== modal ===*/}
                                </Box>
                            </ThemeProvider>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar sx={{ backGroundColor: '#000' }} alt="Remy Sharp">
                                            <AccountCircleIcon />
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                            <Typography
                                                component={Link}
                                                to={setting.url}
                                                textAlign="center"
                                                style={{ textDecoration: 'none' }}
                                            >
                                                {setting.linkName}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export default Header;
