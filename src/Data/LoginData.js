import { extendObservable } from "mobx";
class LoginData {
constructor()
{

    extendObservable(this,{
        Authorized: false,
    })
}
}
export default new LoginData();