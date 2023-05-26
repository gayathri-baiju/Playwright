import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";

class POManager{
    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage= new DashboardPage(page);
    }
    
}
module.exports={POManager}