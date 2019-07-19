export class TraumaCall {

constructor(
    public id: string,
    public date: Date,
    public age?: number,
    public sex?: string,
    public mechanism?: string,
    public headInjury?: boolean,
    public cspineInjury?: boolean,
    public pelvisInjury?: boolean,
    public longboneInjury?: boolean,
    public abdominalInjury?: boolean,
    public CT?: boolean,
    public finalDestination?: string,
    public supervision?: string,
    public notes?: string
){}

public eventType: 'TraumaCall'
public userID: '';

    getObjects(){
        return {eventType: this.eventType, 
            date: this.date, 
            age: this.age,
            sex: this.sex,
            mechanism: this.mechanism,
            headInjury: this.headInjury,
            cspineInjury: this.cspineInjury,
            pelvisInjury: this.pelvisInjury,
            longboneInjury: this.longboneInjury,
            abominalInjury: this.abdominalInjury,
            CT: this.CT,
            finalDestrination: this.finalDestination,
            supervision: this.supervision,
            notes: this.notes}
    }
}
