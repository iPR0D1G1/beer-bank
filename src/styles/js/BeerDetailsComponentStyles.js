const searchBoxHeight = 30
const searchBoxMaxWidth = 800

export default theme => ({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    contentRoot: {
        '&:first-child': {
            paddingTop: 'unset',
        },
        padding: 'unset',

    },
    btnClose: {
        // position: 'absolute',
        top: 0,
        right: 0,
    },
    dialogRoot: {
        padding: 'unset',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    scrollPaper: {
        maxHeight: 'unset',
        maxWidth: '519px',
        [theme.breakpoints.up('sm')]: {
            maxHeight: 762,
        },
    },
    content: {
        padding: `0px ${theme.spacing.unit * 2.3}px ${theme.spacing.unit * 2.3}px ${theme.spacing.unit * 2.3}px`,
        display: 'flex',
        flexDirection: 'column',

    },
    beerImagecontainer: {
        paddingRight: `${theme.spacing.unit * 2.3}px`,
    },
    beerImage: {
        maxHeight: 433,
        maxWidth: 112,
        objectFit: 'cover',
    },
    beerDetails: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    beerDescription: {
        color: theme.palette.textColor.main,
    },
    beerName: {
        fontSize: 22,
        fontWeight: 600,
    },
    beerTag: {
        fontSize: 20,
        color: '#c8bdbc',
    },
    divider: {
        height: 5,
        backgroundColor: '#bc3e95',
        width: 70,
    },
    marginBottomX2: {
        marginBottom: theme.spacing.unit * 2,
    },
    marginBottomX3: {
        marginBottom: theme.spacing.unit,
    },
    otherLikes: {
        fontSize: 22,
        fontWeight: 600,
        marginTop: 30,
    },
    bottomRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat( 3, 150px) ',
        gridColumnGap: `${theme.spacing.unit * 2}px`,
        overflowX: 'auto',
        [theme.breakpoints.down('xs')]: {
            overflow: '-moz-scrollbars-none',
            '&::-webkit-scrollbar': {
                width: '0 !important',
            },
        },
    },
    gridRow: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    bold: {
        fontSize: 18,
        fontWeight: 600,
        color: theme.palette.textColor.main,
    },
    unBold: {
        fontSize: 18,
        fontWeight: 400,
        color: theme.palette.textColor.main,
        marginRight: theme.spacing.unit * 1.5,
    },
    servings: {
        fontSize: 500,
        fontSize: 15,
        // color: theme.palette.textColor.main,
    },
    list: {
        marginTop: 'unset',
        marginBottom: 'unset',
        marginLeft: -theme.spacing.unit,
        fontWeight: 300,
        color: theme.palette.textColor.main,
    },


})