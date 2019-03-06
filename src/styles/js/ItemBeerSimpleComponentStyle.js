const standardSquare = 250
const standardSquareXS = 300

export default theme => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: `1px solid ${theme.palette.textColor.dark}`,
        justifyContent: 'flex-start',
        paddingTop: theme.spacing.unit * 2,
        height: 200,
        width: 150,
    },
    beerImage: {
        maxHeight: 100,
    },
    beerName: {
        fontSize: 18,
        fontWeight: 600,
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.textColor.main,
    },
})