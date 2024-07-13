module.exports = {
    routes : [
        {
            method : 'GET',
            path : '/onlyTitle',
            handler : 'category.onlyTitle',
            config : {
                auth : false,
            }
        }
    ]
}