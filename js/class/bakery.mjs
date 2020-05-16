import { buildings} from "../data.mjs";
import { Building } from "./building.mjs";


export class Bakery {
      constructor(name, cookies, cookiesPerClick, cookiesPerSecond){
        this._name = name || 'MgM' ;
        this._cookies = cookies || 0;
        this._buildings = buildings.map(building =>{
          return new Building(building);
        }) ;
        this._cookiesPerClick = cookiesPerClick || 1;
        this._cookiesPerSecond = cookiesPerSecond || 0;
        
      }
      get cookies() {
        return this._cookies;
      }
      bakeCookies() {//incrémente cookies par cookiesPerClick
        return this._cookies += this._cookiesPerClick;
      
      }
}

//maper sur les data et retourner des new building 








