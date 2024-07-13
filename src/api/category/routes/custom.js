module.exports = {
    routes : [
        {
            method : 'GET',
            path : '/customController',
            handler : 'category.CustomController',
            config : {
                auth : false,
            }
        }
    ]
}