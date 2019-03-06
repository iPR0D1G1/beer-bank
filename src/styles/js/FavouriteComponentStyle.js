export default theme => ({
    container: {

    },
    beerList: {
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