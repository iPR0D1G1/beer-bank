const searchBoxHeight = 30
const searchBoxMaxWidth = 800

export default theme => ({
    searchBoxInput: {
        height: searchBoxHeight,
    },
    searchBoxRoot: {
        margin: `0px ${theme.spacing.unit * 1.5}px`,
        padding: `0px ${theme.spacing.unit}px`,
        backgroundColor: theme.palette.common.white,
        height: searchBoxHeight,
    },
    searchField: {
        flexGrow: 1,
        maxWidth: 500,
        width: '100%',
        margin: '0px 5%',
    },
    listContainer: {
        width: '97vw',
        maxWidth: 469,
        maxHeight: 469,
        minHeight: 300,
    },
    progress: {
        margin: theme.spacing.unit,
    },
    searchIcon: {
        cursor: 'pointer',
        color: '#dee',
    },
})