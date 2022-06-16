
export interface Order {
    
        transactionId: string,
        reference: string,
        client: string,
        totalTransactionValue: number,
        currency: string,
        transactionStatus: string,
        warehouse: string,
        transactionDate: string,
        paymentType:string,
        paymentGateway: string,
      
}