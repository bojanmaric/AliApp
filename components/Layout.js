
import Head from 'next/head'
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material'
import useStyles from '../utils/styles';

import NextLink from 'next/link';

export default function Layout({children}) {

    const classes=useStyles();

    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href='/' passHref>
                        <Link>
                            <Typography className={classes.brand}>amazona</Typography> 
                        </Link>
                   </NextLink>
                   <div className={classes.grow}>

                   </div>
                   <div>
                   <NextLink href='/' passHref>
                        <Link>
                            Card
                        </Link>
                   </NextLink>
                   <NextLink href='/' passHref>
                        <Link>
                            Login
                        </Link>
                   </NextLink>
                   </div>
                </Toolbar>

            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All rights reserved. Next amazona
                </Typography>
            </footer>
        </div>
    )
}
