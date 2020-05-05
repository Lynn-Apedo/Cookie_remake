export class Building {
        constructor(building){
            const {name,description,number,cookiesPerSecond,cost}=building
            
            this._name = name;
            this._description = description;
            this._number = number || 0;
            this._cookiesPerSecond = cookiesPerSecond;
            this._cost = cost ;
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
}













