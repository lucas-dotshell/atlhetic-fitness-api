import { TAbstractAthletic, TConcrectUser } from "./userController.types";

abstract class User implements TConcrectUser {
    private userId : string | number | null;
    constructor(userId = null) {
        this.userId = userId;
    }
    getUser() {
        // model get user
    }
}

class TAthletic extends User {

}