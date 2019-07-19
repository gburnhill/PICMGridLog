export class Intubation {
    
    constructor(
    public id: number,
    public type: string,
    public date: Date,
    public success: boolean,
    public setting?: string,
    public supervision?: string,
    public indication?: string,
    public grade?: number,
    public aids?: string,
    public notes?: string) {}

    public eventType = 'Intubation';
    public userID = '';
    
    getObjects(){
        return {
            eventType: this.eventType, 
            type: this.type, 
            date: this.date, 
            success: this.success, 
            setting: this. setting, 
            supervision: this.supervision, 
            indication: this.indication,
            grade: this.grade, 
            aids: this.aids, 
            notes: this.notes}
    }
}
