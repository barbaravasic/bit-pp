const controller = (function(ui, data){
    function init(){
       
        data.fetchShow(ui.displayTopShow, ui.fail);
        ui.showInfo();

    }
    return{
        init
    }


})(uiModule, dataModule);