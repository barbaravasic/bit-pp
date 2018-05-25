const controller = (function(ui, data){
    function init(){
       
        data.fetchShow(ui.displayTopShow, ui.fail);

    }
    return{
        init
    }


})(uiModule, dataModule);