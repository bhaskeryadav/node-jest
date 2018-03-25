export default class AppRest{

    constructor(app){
        console.log('AppRest cons called');
        this.app = app;
        this.initRestServices();
    }

    initRestServices=()=>{
        this.app.get("/",(req,res)=>{
            res.status(200).send("Hello");
        });
    }

}