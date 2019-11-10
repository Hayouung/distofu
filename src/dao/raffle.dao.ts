export async function addEntry(raffle: RaffleModel): Promise<any> {
    //TODO: insert entry to db
}

export interface RaffleModel {
    number: number;
    userId: string;
    serverId: string;
}
