export class AppSettings{
    public static fotuna_ws_url = "http://localhost:8080";
    public static create_customer_supplier_path = AppSettings.getFortunaWSURL() + "/custsupp/create";
    public static update_customer_supplier_path = AppSettings.getFortunaWSURL() +"/custsupp/update";
    public static get_customer_supplier_path = AppSettings.getFortunaWSURL() + "/custsupp/getall?";
    public static get_customer_supplier_byid =AppSettings.getFortunaWSURL() + "/custsupp/get?";
    public static delete_customer_supplier_byid =AppSettings.getFortunaWSURL() + "/custsupp/delete?";

    public static get_coa_path = AppSettings.getFortunaWSURL() + "/coa/getall?";
    public static get_coa_drop_down_path = AppSettings.getFortunaWSURL() + "/coa/getdd";
    public static create_coa_path = AppSettings.getFortunaWSURL() + "/coa/create";

    private static getFortunaWSURL() {
        return this.fotuna_ws_url;
    }
}