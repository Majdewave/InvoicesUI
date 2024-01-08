export interface invoice{
    params: any [];
    id: string;
    status: string;
    amount: number;

}
export interface invoiceForResponse{
    id: string;
    status: string;
    amount: number;
    Date: Date

}