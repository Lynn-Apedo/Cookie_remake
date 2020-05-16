export class Building {
        constructor(building){
            const {name,description,number,cookiesPerSecond,cost}=building
            
            this._name = name;
            this._description = description;
            this._number = number || 0;
            this._cookiesPerSecond = cookiesPerSecond || 1;
            this._cost = cost ;
        }

    get cookiesPerSecond() {
        return this._cookiesPerSecond;
    }
    get number(){
        return this._number
    }
    get cost(){
        return this._cost
    }

    buy(){

        this._number++;
        this._cost= Math.floor(this._cost*1.15) //incremente le nouveau batiment de 15%
    } 
    buyBuilding(which){
        this._cookies = this._cookies - which.cost
        which.buy()
        this._cookiesPerSecond = which.cookiesPerSecond
        console.log(this._cookiesPerSecond)
    }   
}













