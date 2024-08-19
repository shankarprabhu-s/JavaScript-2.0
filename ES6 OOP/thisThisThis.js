//call bind apply
 class App{
    constructor(){
        this.serverName = 'LocalHost'
        //create an HTML file 
        document.querySelector('button').addEventListener('click',this.getServerName); //// this will give you undefined

        document.querySelector('button').addEventListener('click',this.getServerName.bind(this));  //// this will give 'LocalHost' as the output

    }
    getServerName(){
        console.log(this.serverName())
    }
 }

 const  app = new App();