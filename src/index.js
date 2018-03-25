import app from './common/server';
import AppRest from './rest-apis/app';

export default class Boot{
    appRest;

    constructor(){
        this.initRestServices();
        this.startServer();
    }

    initRestServices=()=>{
        this.appRest = new AppRest(app);
    }

    startServer(){
        app.listen(8080, () => {
            console.log('Example app listening on port 8080!');
        });
    }


}

new Boot();