const standardSquare = 250
const standardSquareXS = 300

export default theme => ({
    wrapper: {
        '&:hover $container': {
            width: standardSquare + 10,
            height: standardSquare + 10,
            transform: `translateY(${-5}px) translateX(${-5}px)`,
            boxShadow: `0px 3px 10px 1px rgba(0,0,0,0.04), 
                                3px 0px 10px 1px rgba(0,0,0,0.04),
                                0px -3px 10px 1px rgba(0,0,0,0.04), 
                                -3px 0px 10px 1px rgba(0,0,0,0.04)`,
            [theme.breakpoints.down('xs')]: {
                width: standardSquareXS + 10,
                height: standardSquareXS + 10,
                transform: `translateY(${-5}px) translateX(${-5}px)`,
                boxShadow: `0px 3px 10px 1px rgba(0,0,0,0.04), 
                                    3px 0px 10px 1px rgba(0,0,0,0.04),
                                    0px -3px 10px 1px rgba(0,0,0,0.04), 
                                    -3px 0px 10px 1px rgba(0,0,0,0.04)`,
            }
        },
        '&:hover $btnFavourite': {
            bottom: 271,
            right: -111,
        },
    },
    container: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateRows: 'repeat( 2, 1fr)',
        borderRadius: 5,
        justifyContent: 'center',
        position: 'relative',
        width: standardSquare,
        height: standardSquare,
        transitionDuration: 200,
        boxShadow: `0px 1px 3px 2px rgba(0,0,0,0.01), 
                    0px -1px 1px 2px rgba(0,0,0,0.01), 
                    0px 1px 1px 2px rgba(0,0,0,0.01), 
                    0px 2px 1px 2px rgba(0,0,0,0.01)`,
        // '&:hover': {
        //     width: standardSquare + 10,
        //     height: standardSquare + 10,
        //     transform: `translateY(${-5}px) translateX(${-5}px)`,
        //     boxShadow: `0px 3px 10px 1px rgba(0,0,0,0.04), 
        //                 3px 0px 10px 1px rgba(0,0,0,0.04),
        //                 0px -3px 10px 1px rgba(0,0,0,0.04), 
        //                 -3px 0px 10px 1px rgba(0,0,0,0.04)`,
        // },
        [theme.breakpoints.down('xs')]: {
            width: standardSquareXS,
            height: standardSquareXS,
            // '&:hover': {
            //     width: standardSquareXS + 10,
            //     height: standardSquareXS + 10,
            //     transform: `translateY(${-5}px) translateX(${-5}px)`,
            //     boxShadow: `0px 3px 10px 1px rgba(0,0,0,0.04), 
            //                 3px 0px 10px 1px rgba(0,0,0,0.04),
            //                 0px -3px 10px 1px rgba(0,0,0,0.04), 
            //                 -3px 0px 10px 1px rgba(0,0,0,0.04)`,
            // },
        }
    },
    beerImage: {
        objectFit: 'cover',
        height: 100,
        // width: 25,
    },
    rowCentered: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    btnFavourite: {
        bottom: 255,
        right: -105,
    },
    btnStar: {
        transitionDuration: 300,
    },
    fullWidth: {
        width: '100%',
    },
    marquee: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    fade: {
        // position: 'relative',
        height: '2.4em',
        overflow: 'hidden',             
        '&:after': {
            content: "",
            textAlign: 'right',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '70%',
            height: '1.2em',
            background: 'linear - gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50 %)',
        },
    }
})