import request from 'superagent-bluebird-promise';


const Api = {
    all() {
        request.get('data/index.json')
            .then(res => {
                console.log(res.body);
            })
        ;
    },

    one(name) {
        request.get(`data/${ name }.json`)
            .then(res => {
                console.log(res.body);
            })
        ;
    }
};


export { Api as default };
