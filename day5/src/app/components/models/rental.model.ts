export class rental {
    public location: string;
    public pricePerNight: number;
    public hostName: string;
    public houseName: string;
    public imageUrl: string;
    public id: number;
    public providerId: number;


    constructor() {
        this.location = "";
        this.pricePerNight = 0;
        this.hostName = "";
        this.houseName = "";
        this.imageUrl = "";
        this.id = 0;
        this.providerId = 0;
    }
}