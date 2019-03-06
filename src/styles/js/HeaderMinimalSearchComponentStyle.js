export default theme => ({
    searchBox: {
        background: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 100,
    },
    title: {
        lineHeight: 'unset',
        marginBottom: -theme.spacing.unit / 3,
        fontWeight: 500,
    },
    subTitle: {

    },
    headerText: {
        color: theme.palette.common.white,
    },
    advancedSearchLink: {
        margin: `${theme.spacing.unit}px 0px`,
    }
})