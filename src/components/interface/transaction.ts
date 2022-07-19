
export interface Transaction {
        totalPages: number
        totalTransactions: number
        transactions:[
               { transactionId: string,
                reference: string,
                client: string,
                totalTransactionValue: number,
                currency: string,
                transactionStatus: string,
                warehouse: string,
                transactionDate: string,
                paymentType:string,
                paymentGateway: string,}
        ] 
      
}

/**/