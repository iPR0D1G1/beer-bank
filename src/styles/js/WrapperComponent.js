export default theme => ({
    header: {
        background: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        justifyContent: 'flex-end',
        zIndex: 200,
    },
    btnLink: {
        color: theme.palette.common.white,
        margin: '6px 8px',
        padding: '3px 4px',
    },
})