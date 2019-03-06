export default theme => ({
    container: {

    },
    searchBox: {
        background: theme.palette.secondary.main,
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: '30px',
        gridColumnGap: `${theme.spacing.unit * 1.5}px`,
        gridRowGap: `${theme.spacing.unit * 1.5}px`,
        gridTemplateRows: `repeat(4, 30px)`,
        padding: `0px ${theme.spacing.unit}px`,
        gridAutoFlow: 'column',
        paddingBottom: theme.spacing.unit * 1.5,
    },
    textFieldInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
        boxShadow: `1px 1px 1px 0px ${theme.palette.secondary.main}`,
    },
    notchedOutline: {
        border: 'unset !important',
    },
    title: {
        gridColumn: 'span 4',
        color: theme.palette.common.white,
    },
    beerName: {
        gridColumn: 'span 4',
    },
    searchResults: {
        height: 'unset !important',
        overflow: 'unset !important',
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: "repeat(3, 250px)",
        gridAutoRows: '250px',
        gridColumnGap: `${theme.spacing.unit * 2}px`,
        gridRowGap: `${theme.spacing.unit * 2}px`,
        padding: `0px ${theme.spacing.unit}px`,
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 1.5,
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(2, 250px)",
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "repeat(1, 300px)",
            gridAutoRows: '300px',
        },
    }
})