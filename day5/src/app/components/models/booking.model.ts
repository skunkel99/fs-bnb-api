export class booking {
    public dateTo: string ;
    public dateFrom: string;
    public propertyId: number;
    public userId: number;
    public status: string;
   

    constructor() {
        this.dateTo = "";
        this.dateFrom = "";
        this.propertyId = 0;
        this.userId = 0;
        this.status = "NEW";
}
}
